import { NextFunction, Request, Response } from 'express';

import { ErrorResponse } from '../interfaces';

/* eslint-disable @typescript-eslint/no-unused-vars */
export function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message || err,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}
