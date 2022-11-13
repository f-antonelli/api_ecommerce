import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';

import HttpError from '../helpers/http-errors';
import { UserLogin } from '../interfaces';
import UserDAO from '../models/daos/users.mongo';

const User = new UserDAO();

const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
  const user: UserLogin = req.body;
  const { email, password } = user;

  if (!email || !password) {
    const error = new HttpError('Fields must not be empty', 400);

    next(error);
  }

  const checkUserEmail = await User.getBy('email', email);
  if (!checkUserEmail) {
    const error = new HttpError('The email or password is incorrect. Please retry', 400);

    next(error);
  } else {
    const checkPassword = await bcrypt.compare(password, checkUserEmail.password as string);

    if (!checkPassword) {
      const error = new HttpError('The email or password is incorrect. Please retry', 400);

      next(error);
    }
  }

  next();
};

export default loginValidation;
