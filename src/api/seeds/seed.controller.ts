import { NextFunction, Request, Response } from 'express';

import logger from '../../helpers/logger';
import response from '../../helpers/response';
import { executeSeed } from './seed.service';

export async function executeSeedHandler(req: Request, res: Response, next: NextFunction) {
  try {
    await executeSeed();

    response({
      res,
      code: 200,
      message: 'PRODUCT SEED EXECUTED',
      body: [],
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}
