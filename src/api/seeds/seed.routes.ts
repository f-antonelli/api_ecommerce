import { Router } from 'express';

import { executeSeedHandler } from './seed.controller';

const router = Router();

router.get('/products', executeSeedHandler);

export default router;
