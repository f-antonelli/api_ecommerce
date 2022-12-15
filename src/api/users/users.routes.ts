import { Router } from 'express';

import { checkAuth } from '../../middleware/check-auth';
import { validateRequest } from '../../middleware/validate-request';
import {
  deleteUsersHandler,
  getUserHandler,
  getUsersHandler,
  updateUserHandler,
} from './users.controller';
import { delUserSchema, getUserSchema, updateUserSchema } from './users.schema';

const router = Router();

// GET
router.get('/', checkAuth, getUsersHandler);
router.get('/:id', [checkAuth, validateRequest(getUserSchema)], getUserHandler);

// PUT
router.put('/:id', [checkAuth, validateRequest(updateUserSchema)], updateUserHandler);

// DELETE
router.delete('/:id', [checkAuth, validateRequest(delUserSchema)], deleteUsersHandler);
router.delete('/', checkAuth, deleteUsersHandler);

export default router;
