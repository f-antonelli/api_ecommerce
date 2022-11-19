import { NextFunction, Request, Response } from 'express';

import { verifyJwt } from '../helpers/jwt';
import logger from '../helpers/logger';

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) throw new Error('Authentication failed!');

    const result = verifyJwt(token);

    if (result.expired || !result.valid) throw new Error('Authentication failed!');

    next();
  } catch (error) {
    logger.error(error);
    next(error);
  }
}
