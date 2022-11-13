import { NextFunction, Request, Response } from 'express';

import HttpError from '../helpers/http-errors';
import { UserLogin } from '../interfaces';
import UserDAO from '../models/daos/users.mongo';

const User = new UserDAO();

const emailExists = async (req: Request, res: Response, next: NextFunction) => {
  const user: UserLogin = req.body;
  const { email } = user;

  const checkUser = await User.getBy('email', email);

  if (checkUser) {
    const error = new HttpError('There is already a user with this email.', 403);

    next(error);
  }

  next();
};

export default emailExists;
