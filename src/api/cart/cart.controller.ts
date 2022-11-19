import { NextFunction, Request, Response } from 'express';

import logger from '../../helpers/logger';
import response from '../../helpers/response';
import { updateProductSchema } from '../products/products.schema';
import { createCart } from './cart.service';

export async function createCartHandler(
  req: Request<updateProductSchema['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const cart = await createCart(id);

    if (!cart) throw new Error('Can not create this cart. Please try again');

    response({
      res,
      code: 201,
      message: 'Cart created!',
      body: { cart },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}
