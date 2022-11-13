import { NextFunction, Request, Response } from 'express';

import HttpError from '../helpers/http-errors';
import { UserCreate } from '../interfaces';
import UserDAO from '../models/daos/users.mongo';

const User = new UserDAO();

const usernameExists = async (req: Request, res: Response, next: NextFunction) => {
  const user: UserCreate = req.body;
  const { username } = user;

  const checkUser = await User.getBy('username', username);

  if (checkUser) {
    const error = new HttpError('There is already a user with this name.', 403);

    next(error);
  }

  next();
};

export default usernameExists;
