import { NextFunction, Request, Response } from 'express';

import logger from '../../helpers/logger';
import response from '../../helpers/response';
import { findProduct } from '../products/products.service';
import {
  createCartCartSchema,
  deleteCartSchema,
  getCartSchema,
  updateCartSchema,
} from './cart.schema';
import {
  createCart,
  deleteCart,
  findCart,
  updateProductCart,
  addProdToCart,
  delProdFromCart,
} from './cart.service';

export async function getCartHandler(
  req: Request<getCartSchema['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params;

    const cart = await findCart({ userId });

    if (!cart) throw new Error('Can not find this cart. Please try again');

    response({
      res,
      body: { cart },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function createCartHandler(
  req: Request<createCartCartSchema['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params;

    const cart = await createCart(userId);

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

export async function updateCartHandler(
  req: Request<updateCartSchema['params'], {}, updateCartSchema['body']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { cartId } = req.params;
    const { quantity, productId } = req.body;

    const product = await findProduct({ _id: productId });

    if (!product) throw new Error('Can not modify this product. Please try again');

    const cart = await findCart({ _id: cartId });

    if (!cart) throw new Error('Can not modify this cart. Please try again');

    const updatedCart = await updateProductCart(
      { _id: productId },
      { quantity, total: product.price * quantity },
      {
        new: true,
      }
    );

    if (!updatedCart) throw new Error('Can not update this cart. Please try again');
    console.log(updatedCart);
    response({
      res,
      code: 201,
      message: 'Cart updated!',
      body: {
        updatedCart,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function addProdToCartHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { cartId, prodId } = req.params;
    const { quantity } = req.body;

    const product = await findProduct({ _id: prodId });

    if (!product) throw new Error('Can not modify this product. Please try again');

    product.quantity = quantity;
    product.total = product.price * quantity;

    const productCart = await addProdToCart({ _id: cartId }, product, { new: true });

    response({
      res,
      code: 200,
      message: 'Cart modified!',
      body: { productCart },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function deleteCartHandler(
  req: Request<deleteCartSchema['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { cartId } = req.params;

    const cartDeleted = await deleteCart({ _id: cartId });

    if (!cartDeleted) throw new Error('Can not delete this cart. Please try again');

    response({
      res,
      code: 201,
      message: 'Cart deleted!',
      body: { cartDeleted },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function delProdFromCartHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { cartId, prodId } = req.params;

    const productCart = await delProdFromCart({ _id: cartId }, { _id: prodId }, { new: true });

    response({
      res,
      message: 'Product deleted from cart!',
      body: { productCart },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}
