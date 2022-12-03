import mongoose from 'mongoose';

export interface ItemCart {
  _id: mongoose.Types.ObjectId;
  quantity: number;
  total: number;
}

export interface ItemCartDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  quantity: number;
  total: number;
  createdAt: Date;
  updateAt: Date;
}

export interface Cart {
  userId: mongoose.Types.ObjectId;
  products: ItemCart[];
  total: number;
}

export interface CartDocument extends Cart, mongoose.Document {
  createdAt: Date;
  updateAt: Date;
}
