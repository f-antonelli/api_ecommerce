import { Router } from 'express';

import { productSeedHandler, userSeedHandler } from './seed.controller';

const router = Router();

router.get('/products', productSeedHandler);
router.get('/users', userSeedHandler);

export default router;
