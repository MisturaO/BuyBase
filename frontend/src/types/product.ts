export interface Product {
  product_title: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  banner?: boolean;
}

export interface ProductDisplay extends Product {
  stock: number;
  discount?: number;
  tag: number;
  rating?: number;
  comments: number;
}
