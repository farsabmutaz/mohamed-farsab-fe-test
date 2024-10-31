export interface Merchant {
    id: string;
    merchantId: string;
    name: string;
    description: string;
    profileImage: string;
    logoImage?: string; // optional logo image
    productCommissionRate: number;
    productBadges: string[];
    url?: string;
}