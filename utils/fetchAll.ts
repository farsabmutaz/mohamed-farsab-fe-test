// utils/fetchAll.ts
import { Product } from '../models/Product';
import { Merchant } from '../models/Merchant';
import { User } from '../models/User';

interface FetchAllResponse {
  products: Product[];
  merchants: Merchant[];
  users: User[];
}

export async function fetchAll(query: string): Promise<FetchAllResponse> {
  const response = await fetch('/api/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  console.log(data);

  const products: Product[] = data.products as Product[];
  const merchants: Merchant[] = data.merchants?.map((merchant: any) => ({
    id: merchant.id,
    merchantId: merchant.merchantId,
    name: merchant.name,
    description: merchant.description,
    profileImage: merchant.profileImage,
    logoImage: merchant.images?.find((image: any) => image.type === 'logo')?.url || '',
    productCommissionRate: merchant.productCommissionRate,
    productBadges: merchant.productBadges || [],
    url: merchant.url,
  }));

  const users: User[] = data.users?.map((user: any) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: `${user.firstName} ${user.lastName}`.trim(),
    description: user.description,
    profileImage: user.profileImage,
    backgroundImage: user.backgroundImage,
  }));

  return { products, merchants, users };
}
