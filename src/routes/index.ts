import { Request, Response, Router } from 'express';

import authRoutes from './auth.routes';

const router = Router();

router.get('/', (req: Request, res: Response) => res.send('Hello world!'));

router.use('/auth', authRoutes);

export default router;
