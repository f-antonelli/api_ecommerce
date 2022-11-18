import { omit } from 'lodash';

import UserModel from '../../database/models/user.model';
import logger from '../../helpers/logger';
import { UserInput } from '../../interfaces/user.interface';

export async function createUser(input: UserInput) {
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
