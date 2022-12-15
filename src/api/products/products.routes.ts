import { Router } from 'express';

import { checkAuth } from '../../middleware/check-auth';
import { validateRequest } from '../../middleware/validate-request';
import {
  createProductHandler,
  deleteProductHandler,
  deleteProductsHandler,
  getProductByIdHandler,
  getProductsHandler,
  updateProductHandler,
} from './products.controller';
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from './products.schema';

const router = Router();

// GET
router.get('/', getProductsHandler);
router.get('/:id', validateRequest(getProductSchema), getProductByIdHandler);

// POST
router.post('/', [checkAuth, validateRequest(createProductSchema)], createProductHandler);

// UPDATE
router.put('/:id', [checkAuth, validateRequest(updateProductSchema)], updateProductHandler);

// DELETE
router.delete('/:id', [checkAuth, validateRequest(deleteProductSchema)], deleteProductHandler);
router.delete('/', checkAuth, deleteProductsHandler);

export default router;
