import mongoose from 'mongoose';

import { CartDTO } from '../api/cart/cart.dto';

export interface ItemCartDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  quantity: number;
  total: number;
  createdAt: Date;
  updateAt: Date;
}

export interface CartDocument extends CartDTO, mongoose.Document {
  createdAt: Date;
  updateAt: Date;
}
