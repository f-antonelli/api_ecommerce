import { NextFunction, Request, Response } from 'express';

import { HttpError } from '../helpers/http-error';
import { verifyJwt } from '../helpers/jwt';
import logger from '../helpers/logger';

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) throw new HttpError('Authentication failed!', 401);

    const result = verifyJwt(token);

    if (result.expired || !result.valid) throw new HttpError('Authentication failed!', 401);

    next();
  } catch (error) {
    logger.error(error);
    next(error);
  }
}
