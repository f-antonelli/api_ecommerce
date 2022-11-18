import { Router } from 'express';

import { validateRequest } from '../../middleware/validate-request';
import { createUserSchema } from '../user/user.schema';
import * as AuthHandlers from './auth.controller';
import { loginUserSchema } from './auth.schema';

const router = Router();

// POST
router.post('/signup', validateRequest(createUserSchema), AuthHandlers.createUserHandler);
router.post('/login', validateRequest(loginUserSchema), AuthHandlers.userLoginHandler);

export default router;
