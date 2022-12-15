import { Router } from 'express';

import { productSeedHandler } from './seed.controller';

const router = Router();

router.get('/products', productSeedHandler);

export default router;
