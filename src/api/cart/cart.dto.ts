import mongoose from 'mongoose';

export interface ItemCartDTO {
  _id: mongoose.Types.ObjectId;
  quantity: number;
  total: number;
}
export interface CartDTO {
  userId: mongoose.Types.ObjectId;
  products: ItemCartDTO[];
  total: number;
}
