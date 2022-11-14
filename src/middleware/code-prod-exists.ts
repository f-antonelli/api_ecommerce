import { NextFunction, Request, Response } from 'express';

import HttpError from '../helpers/http-errors';
import { Product } from '../interfaces';
import ProductDAO from '../models/daos/products.mongo';

const Product = new ProductDAO();

const codeExists = async (req: Request, res: Response, next: NextFunction) => {
  const product: Product = req.body;
  const { code } = product;

  const checkCode = await Product.getBy('code', code);

  if (checkCode) {
    const error = new HttpError('There is already a product with this code.', 403);

    next(error);
  }

  next();
};

export default codeExists;
