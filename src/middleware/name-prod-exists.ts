import { NextFunction, Request, Response } from 'express';

import HttpError from '../helpers/http-errors';
import { Product } from '../interfaces';
import ProductDAO from '../models/daos/products.mongo';

const Product = new ProductDAO();

const nameExists = async (req: Request, res: Response, next: NextFunction) => {
  const product: Product = req.body;
  const { name } = product;

  const checkName = await Product.getBy('name', name);

  if (checkName) {
    const error = new HttpError('There is already a product with this name.', 403);

    next(error);
  }

  next();
};

export default nameExists;
