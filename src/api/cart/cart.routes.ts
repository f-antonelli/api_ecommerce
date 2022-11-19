import { Router } from 'express';

import { validateRequest } from '../../middleware/validate-request';
import * as CartHandler from './cart.controller';
import { createCartSchema } from './cart.schema';

const router = Router();

// GET
router.get('/:id');

// POST
router.post('/:id', validateRequest(createCartSchema), CartHandler.createCartHandler);

// UPDATE
router.put('/:id');

// DELETE
router.delete('/:id');

export default router;
