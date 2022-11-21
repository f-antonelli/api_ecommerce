import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import CartModel from '../../database/models/cart.model';
import { CartDocument } from '../../interfaces';

export function createCart(data: string) {
  return CartModel.create({ userId: data });
}

export function findCart(query: FilterQuery<CartDocument>, options: QueryOptions = { lean: true }) {
  return CartModel.findOne(query, {}, options);
}

export function addProdToCart(
  query: FilterQuery<CartDocument>,
  update: UpdateQuery<CartDocument>,
  options: QueryOptions
) {
  return CartModel.updateOne(query, { $push: { products: update } }, options);
}

export function updateProductCart(
  query: FilterQuery<CartDocument>,
  update: UpdateQuery<CartDocument>,
  options: QueryOptions
) {
  return CartModel.findOneAndUpdate(
    { products: { $elemMatch: { query } } },
    { $set: { 'products.$.quantity': update.quantity, 'products.$.total': update.total } },
    options
  );
}

export function delProdFromCart(
  query: FilterQuery<CartDocument>,
  product: UpdateQuery<CartDocument>,
  options: QueryOptions
) {
  return CartModel.findOneAndUpdate(query, { $pull: { products: { ...product } } }, options);
}

export function deleteCart(query: FilterQuery<CartDocument>) {
  return CartModel.findOneAndDelete(query);
}
