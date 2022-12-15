import { DocumentDefinition } from 'mongoose';

import ProductModel from '../../database/models/products.model';
import { Product } from '../../interfaces';
import { deleteProducts } from '../products/products.service';
import { products } from './data';

export async function executeSeed() {
  await deleteProducts();

  const seedProducts = products;

  const insertPromises: DocumentDefinition<Product>[] = [];

  seedProducts.forEach((product) => {
    insertPromises.push(ProductModel.create(product));
  });

  await Promise.all(insertPromises);

  return true;
}
