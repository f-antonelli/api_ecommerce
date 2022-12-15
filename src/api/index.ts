import express, { Request, Response } from 'express';
import swaggerDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';

import { MessageResponse } from '../interfaces';
import { SwaggerOptions } from '../swagger.config';
import auth from './auth/auth.routes';
import cart from './cart/cart.routes';
import products from './products/products.routes';
import seeds from './seeds/seed.routes';
import users from './users/users.routes';

const router = express.Router();
const specs = swaggerDoc(SwaggerOptions);

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API :)',
  });
});

//  healtcheck
router.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

//  swagger
router.use('/docs', serve, setup(specs));

//  API routes
router.use('/seeds', seeds);
router.use('/auth', auth);
router.use('/products', products);
router.use('/cart', cart);
router.use('/users', users);

export default router;
