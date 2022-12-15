import { Router } from 'express';

import { validateRequest } from '../../middleware/validate-request';
import { createUserSchema } from '../users/users.schema';
import { createUserHandler, userLoginHandler } from './auth.controller';
import { loginUserSchema } from './auth.schema';

const router = Router();

// POST
router.post('/signup', validateRequest(createUserSchema), createUserHandler);
router.post('/login', validateRequest(loginUserSchema), userLoginHandler);

export default router;
