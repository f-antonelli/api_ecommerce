import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import UserModel from '../../database/models/users.model';
import { UserDocument } from '../../interfaces';

export function findAllUsers() {
  return UserModel.find();
}

export function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) {
  return UserModel.findOne(query, {}, options);
}

export function updateUser(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) {
  return UserModel.findOneAndUpdate(query, update, options);
}

export function deleteUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOneAndDelete(query);
}
