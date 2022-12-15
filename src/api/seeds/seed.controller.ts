import { NextFunction, Request, Response } from 'express';

import logger from '../../helpers/logger';
import response from '../../helpers/response';
import { executeProductSeed, executeUserSeed } from './seed.service';

export async function productSeedHandler(req: Request, res: Response, next: NextFunction) {
  try {
    await executeProductSeed();

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

export async function userSeedHandler(req: Request, res: Response, next: NextFunction) {
  try {
    await executeUserSeed();

    response({
      res,
      code: 200,
      message: 'USER SEED EXECUTED',
      body: [],
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}
