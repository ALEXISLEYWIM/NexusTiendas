export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  badge?: 'new' | 'sale' | 'hot';
  stars: number;
  reviews: number;
  stock: number;
  description: string;
  specs: { cpu?: string; ram?: string; screen?: string; battery?: string; os?: string; storage?: string; };
}

export interface CartItem extends Product { qty: number; }
