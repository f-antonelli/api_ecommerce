import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import HttpError from '../helpers/http-errors';
import response from '../helpers/response';
import { UserCreate, UserLogin } from '../interfaces';
import UserDAO from '../models/daos/users.mongo';

const User = new UserDAO();

export const login = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: UserLogin = req.body;
    const token = jwt.sign(user, process.env.SECRET_KEY as string, { expiresIn: '1h' });

    response({
      res,
      message: 'Successful login!',
      body: {
        user,
        token,
      },
    });
  } catch (err) {
    const error = new HttpError('Logging in failed, please try again later.', 500);
    next(error);
  }
};

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser: UserCreate = req.body;
    const { email, password, username } = newUser;

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    response({
      res,
      message: 'User created!',
      body: {
        username,
        email,
      },
    });
  } catch (err) {
    const error = new HttpError('Could not create user, please try again.', 500);
    next(error);
  }
};
