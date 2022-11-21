import express, { Request, Response } from 'express';

import { MessageResponse } from '../interfaces';
import auth from './auth/auth.routes';
import cart from './cart/cart.routes';
import products from './products/products.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API :)',
  });
});

//  healtcheck
router.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

//  API routes
router.use('/auth', auth);
router.use('/products', products);
router.use('/cart', cart);

export default router;
