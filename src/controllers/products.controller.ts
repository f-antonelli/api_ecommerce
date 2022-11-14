import { NextFunction, Request, Response } from 'express';

import HttpError from '../helpers/http-errors';
import response from '../helpers/response';
import { Product } from '../interfaces';
import ProductsDAO from '../models/daos/products.mongo';

const Product = new ProductsDAO();

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.getAll();

    response({
      res,
      body: {
        product,
      },
    });
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a product.', 500);
    next(error);
  }
};

export const getProductsById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const product = await Product.getById(id);

    response({
      res,
      body: {
        product,
      },
    });
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a product.', 500);
    next(error);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newProduct: Product = req.body;

    const result = await Product.create(newProduct);

    response({
      res,
      message: 'Product created!',
      body: {
        result,
      },
    });
  } catch (err) {
    const error = new HttpError('Creating product failed, please try again', 500);

    next(error);
  }
};
