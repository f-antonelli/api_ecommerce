import { Router } from 'express';

import { checkAuth } from '../../middleware/check-auth';
import { validateRequest } from '../../middleware/validate-request';
import * as UsersHandler from './users.controller';
import { delUserSchema, getUserSchema, updateUserSchema } from './users.schema';

const router = Router();

// GET
router.get('/', checkAuth, UsersHandler.getUsersHandler);
router.get('/:id', [checkAuth, validateRequest(getUserSchema)], UsersHandler.getUserHandler);

// PUT
router.put('/:id', [checkAuth, validateRequest(updateUserSchema)], UsersHandler.updateUserHandler);

// DELETE
router.delete('/:id', [checkAuth, validateRequest(delUserSchema)], UsersHandler.deleteUserHandler);

export default router;
