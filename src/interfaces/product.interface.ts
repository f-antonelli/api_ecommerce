import mongoose from 'mongoose';

export interface Product {
  code: string;
  description?: string;
  quantity?: number;
  total?: number;
  image: string;
  name: string;
  price: number;
  stock: number;
}

export interface ProductDocument extends Product, mongoose.Document {
  createdAt: Date;
  updateAt: Date;
}
