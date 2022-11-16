import { omit } from 'lodash';

import UserModel from '../../database/models/auth.model';
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
