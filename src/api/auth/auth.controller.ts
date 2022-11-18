import { NextFunction, Request, Response } from 'express';

import { signJwt } from '../../helpers/jwt';
import logger from '../../helpers/logger';
import response from '../../helpers/response';
import { CreateUserInput } from '../user/user.schema';
import { loginUserSchema } from './auth.schema';
import { createUser, validatePassword } from './auth.service';

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);

    response({
      body: user,
      code: 201,
      message: 'User created!',
      res,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export const userLoginHandler = async (
  req: Request<{}, {}, loginUserSchema['body']>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await validatePassword(req.body);

    if (!user) throw new Error('Invalid email or password');

    const generateToken = signJwt({ ...user }, { expiresIn: process.env.EXPIRES });

    response({
      res,
      message: 'Successful login!',
      body: {
        user: user.email,
        token: generateToken,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
