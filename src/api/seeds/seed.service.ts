import { DocumentDefinition } from 'mongoose';

import ProductModel from '../../database/models/products.model';
import UserModel from '../../database/models/users.model';
import { Product, User } from '../../interfaces';
import { deleteProducts } from '../products/products.service';
import { deleteUsers } from '../users/users.service';
import { products, users } from './data';

export async function executeProductSeed() {
  await deleteProducts();

  const seedProducts = products;

  const insertPromises: DocumentDefinition<Product>[] = [];

  seedProducts.forEach((product) => {
    insertPromises.push(ProductModel.create(product));
  });

  await Promise.all(insertPromises);

  return true;
}

export async function executeUserSeed() {
  await deleteUsers();

  const seedUsers = users;

  const insertPromises: DocumentDefinition<User>[] = [];

  seedUsers.forEach((user) => {
    insertPromises.push(UserModel.create(user));
  });

  await Promise.all(insertPromises);

  return true;
}
