import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import ProductModel from '../../database/models/products.model';
import { Product, ProductDocument } from '../../interfaces';

export function createProduct(data: DocumentDefinition<Product>) {
  return ProductModel.create(data);
}

export function findAllProducts() {
  return ProductModel.find();
}

export function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
  return ProductModel.findOne(query, {}, options);
}

export function updateProduct(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions
) {
  return ProductModel.findOneAndUpdate(query, update, options);
}

export function deleteProduct(query: FilterQuery<ProductDocument>) {
  return ProductModel.findOneAndDelete(query);
}

export function deleteProducts() {
  return ProductModel.deleteMany();
}
