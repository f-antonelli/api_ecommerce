import { omit } from 'lodash';

import UserModel from '../../database/models/users.model';
import logger from '../../helpers/logger';
import { User } from '../../interfaces';

export async function createUser(input: User) {
  try {
    const user = await UserModel.create(input);

    return omit(user.toJSON(), 'password');
  } catch (error) {
    logger.error(error);
    throw new Error(error as string);
  }
}

export async function validatePassword({ email, password }: { email: string; password: string }) {
  try {
    const user = await UserModel.findOne({ email });

    if (!user) return false;

    const isValid = await user.comparePassword(password);

    if (!isValid) return false;

    return omit(user.toJSON(), 'password');
  } catch (error) {
    logger.error(error);
    throw new Error(error as string);
  }
}
