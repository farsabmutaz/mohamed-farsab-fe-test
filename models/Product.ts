// Define interfaces for nested objects in the response
export interface Brand {
    name: string;
    merchantBrand: boolean;
}

export interface Image {
    id?: string;
    url: string;
    format?: string;
    index: number;
}

export interface Option {
    key: string;
    keyName?: string;
    value: string;
}

export interface Variant {
    id?: string;
    merchantVariantId: string;
    url?: string;
    title: string;
    description?: string;
    price: number;
    oldPrice?: number;
    stockCount: number;
    active: boolean;
    available: boolean;
    images: Image[];
    options: Option[];
    createdAt?: string;
    updatedAt?: string;
}

export interface Locale {
    country: string;
    language: string;
    currency: string;
    active: boolean;
    available: boolean;
    variants: Variant[];
    createdAt?: string;
    updatedAt?: string;
}

export interface Product {
    id: string;
    productId: string;
    active: boolean;
    available: boolean;
    badges: string[];
    brand: Brand;
    commissionRate: number;
    locales: Locale[];
    categories: { name: string; index: number }[];
    createdAt?: string;
    updatedAt?: string;
}
