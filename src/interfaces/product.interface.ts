import mongoose from 'mongoose';

export interface Product {
  code: string;
  description?: string;
  image: string;
  name: string;
  price: number;
  stock: number;
}

export interface ProductDocument extends Product, mongoose.Document {
  createdAt: Date;
  updateAt: Date;
}
