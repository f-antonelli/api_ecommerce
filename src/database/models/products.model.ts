import mongoose from 'mongoose';

import { ProductDocument } from '../../interfaces';

const productSchema = new mongoose.Schema<ProductDocument>(
  {
    code: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>('Products', productSchema);

export default ProductModel;
