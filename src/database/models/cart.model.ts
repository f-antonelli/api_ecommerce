import mongoose from 'mongoose';

import { CartDocument, ItemCartDocument } from '../../interfaces';

const ItemCartSchema = new mongoose.Schema<ItemCartDocument>(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity can not be less then 1.'],
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const cartSchema = new mongoose.Schema<CartDocument>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    products: { type: [ItemCartSchema], default: [] },
    total: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const CartModel = mongoose.model<CartDocument>('Cart', cartSchema);

export default CartModel;
