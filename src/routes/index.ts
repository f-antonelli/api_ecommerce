import { Request, Response, Router } from 'express';

import authRoutes from './auth.routes';
import productRoutes from './products.routes';

const router = Router();

router.get('/', (req: Request, res: Response) => res.send('Hello world!'));

router.use('/auth', authRoutes);
router.use('/products', productRoutes);

export default router;
