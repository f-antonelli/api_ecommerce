import mongoose from 'mongoose';

export interface ItemCart {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  total: number;
}

export interface ItemCartDocument extends ItemCart, mongoose.Document {
  createdAt: Date;
  updateAt: Date;
}

export interface Cart {
  userId: mongoose.Types.ObjectId;
  products?: ItemCart[];
  total?: number;
}

export interface CartDocument extends Cart, mongoose.Document {
  createdAt: Date;
  updateAt: Date;
}
