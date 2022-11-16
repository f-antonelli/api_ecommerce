import { Router } from 'express';

import { validateRequest } from '../../middleware/validate-request';
import * as AuthHandlers from './auth.controller';
import { createUserSchema } from './user.schema';

const router = Router();

// POST
router.post('/signup', validateRequest(createUserSchema), AuthHandlers.createUserHandler);
// router.post('/login', loginValidation, login);

export default router;
