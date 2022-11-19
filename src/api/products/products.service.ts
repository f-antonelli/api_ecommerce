import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import ProductModel from '../../database/models/products.model';
import { Product, ProductDocument } from '../../interfaces';

export function createProduct(data: DocumentDefinition<Product>) {
  return ProductModel.create(data);
}

export async function findAllProducts() {
  return ProductModel.find();
}

export async function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
  return ProductModel.findOne(query, {}, options);
}

export async function updateProduct(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions
) {
  return ProductModel.findOneAndUpdate(query, update, options);
}

export async function deleteProduct(query: FilterQuery<ProductDocument>) {
  return ProductModel.findOneAndDelete(query);
}
