import mongoose from 'mongoose';

import { ProductDTO } from '../api/products/products.dto';

export interface ProductDocument extends ProductDTO, mongoose.Document {
  createdAt: Date;
  updateAt: Date;
}
