import { NextFunction, Request, Response } from 'express';

import { HttpError } from '../../helpers/http-error';
import logger from '../../helpers/logger';
import response from '../../helpers/response';
import { createProductSchema, getProductSchema, updateProductSchema } from './products.schema';
import {
  createProduct,
  deleteProduct,
  deleteProducts,
  findAllProducts,
  findProduct,
  updateProduct,
} from './products.service';

export async function getProductsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const products = await findAllProducts();

    if (!products) throw new Error('Can not find this products. Please try again');

    response({
      res,
      code: 200,
      body: {
        products,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function getProductByIdHandler(
  req: Request<getProductSchema['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const product = await findProduct({ _id: id });

    if (!product) throw new HttpError('Can not find this product. Please try again', 404);

    response({
      res,
      code: 200,
      body: {
        product,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function createProductHandler(
  req: Request<{}, {}, createProductSchema['body']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;

    const product = await createProduct({ ...body });

    if (!product) throw new HttpError('Can not create this product. Please try again', 500);

    response({
      res,
      code: 201,
      message: 'Product created',
      body: {
        product,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function updateProductHandler(
  req: Request<updateProductSchema['params'], {}, updateProductSchema['body']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const update = req.body;

    const updatedProduct = await updateProduct({ _id: id }, update, { new: true });

    if (!updatedProduct) throw new Error('Can not update this product. Please try again');

    response({
      res,
      code: 201,
      message: 'Product updated!',
      body: {
        updatedProduct,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function deleteProductHandler(
  req: Request<updateProductSchema['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const deletedProduct = await deleteProduct({ _id: id });

    if (!deletedProduct) throw new Error('Can not delete this product. Please try again');

    response({
      res,
      code: 200,
      message: 'Product deleted!',
      body: {
        deletedProduct,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}

export async function deleteProductsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const products = await deleteProducts();

    response({
      res,
      code: 200,
      message: 'Products deleted!',
      body: {
        products,
      },
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
}
