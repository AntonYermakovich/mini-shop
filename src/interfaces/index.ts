export interface IProductsFilters {
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  title?: string
}

export interface ICartProduct {
  productId: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ICartState {
  items: ICartProduct[];
}

export interface ICategory {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface IUser {
  id: number
  email: string
  password: string
  name: string
  role: string
  avatar: string
  creationAt: string
  updatedAt: string
}