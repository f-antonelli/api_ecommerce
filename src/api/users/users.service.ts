import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

import UserModel from '../../database/models/users.model';
import { UserDocument } from '../../interfaces';

export function findAllUsers() {
  return UserModel.find().select('-password');
}

export function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) {
  return UserModel.findOne(query, {}, options).select('-password');
}

export function updateUser(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) {
  return UserModel.findOneAndUpdate(query, update, options).select('-password');
}

export function deleteUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOneAndDelete(query).select('-password');
}

export function deleteUsers() {
  return UserModel.deleteMany();
}
