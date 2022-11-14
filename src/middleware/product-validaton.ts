import { NextFunction, Request, Response } from 'express';

import HttpError from '../helpers/http-errors';
import { Product } from '../interfaces';
import ProductDAO from '../models/daos/products.mongo';

const Product = new ProductDAO();

const productValidation = async (req: Request, res: Response, next: NextFunction) => {
  const product: Product = req.body;
  const { code, name, image, price, stock } = product;

  if (!code || !name || !image || !price || !stock) {
    const error = new HttpError('Fields must not be empty', 400);

    next(error);
  }

  const checkCode = await Product.getBy('code', code);
  if (checkCode) {
    const error = new HttpError('There is already a product with this code.', 403);

    next(error);
  }

  const checkName = await Product.getBy('name', name);

  if (checkName) {
    const error = new HttpError('There is already a product with this name.', 403);

    next(error);
  }

  next();
};

export default productValidation;
