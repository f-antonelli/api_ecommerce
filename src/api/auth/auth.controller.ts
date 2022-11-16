import { NextFunction, Request, Response } from 'express';

import logger from '../../helpers/logger';
import response from '../../helpers/response';
import { createUser } from './auth.service';
import { CreateUserInput } from './user.schema';

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

// export const login = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user: UserLogin = req.body;
//     const token = jwt.sign(user, process.env.SECRET_KEY as string, { expiresIn: '1h' });

//     response({
//       res,
//       message: 'Successful login!',
//       body: {
//         user,
//         token,
//       },
//     });
//   } catch (err) {
//     const error = new HttpError('Logging in failed, please try again later.', 500);
//     next(error);
//   }
// };
