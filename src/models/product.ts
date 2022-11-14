import { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    description: { type: String },
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);

export default ProductSchema;
