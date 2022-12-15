import { NextFunction, Request, Response } from 'express';

import logger from '../../helpers/logger';
import response from '../../helpers/response';
import { delUserSchema, getUserSchema, updateUserSchema } from './users.schema';
import { deleteUser, deleteUsers, findAllUsers, findUser, updateUser } from './users.service';

export async function getUsersHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await findAllUsers();

    if (!users) throw new Error('Can not find this users. Please try again');

    response({
      res,
      code: 200,
      body: {
        users,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function getUserHandler(
  req: Request<getUserSchema['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const user = await findUser({ _id: id });

    if (!user) throw new Error('Can not find this user. Please try again');

    response({
      res,
      code: 200,
      body: {
        user,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function updateUserHandler(
  req: Request<updateUserSchema['params'], {}, updateUserSchema['body']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const update = req.body;

    const user = await updateUser({ _id: id }, update, { new: true });

    if (!user) throw new Error('Can not update this user. Please try again');

    response({
      res,
      code: 201,
      message: 'User updated!',
      body: {
        user,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function deleteUserHandler(
  req: Request<delUserSchema['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const user = await deleteUser({ _id: id });

    if (!user) throw new Error('Can not delete this user. Please try again');

    response({
      res,
      code: 200,
      message: 'User deleted!',
      body: {
        user,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function deleteUsersHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await deleteUsers();

    response({
      res,
      code: 200,
      message: 'Users deleted!',
      body: {
        users,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}
