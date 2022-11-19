import { Router } from 'express';

import { checkAuth } from '../../middleware/check-auth';
import { validateRequest } from '../../middleware/validate-request';
import * as ProductHandler from './products.controller';
import {
  CreateProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from './products.schema';

const router = Router();

// GET
router.get('/', ProductHandler.getProductsHandler);
router.get('/:id', validateRequest(getProductSchema), ProductHandler.getProductByIdHandler);

// POST
router.post(
  '/',
  [checkAuth, validateRequest(CreateProductSchema)],
  ProductHandler.createProductHandler
);

// UPDATE
router.put(
  '/:id',
  [checkAuth, validateRequest(updateProductSchema)],
  ProductHandler.updateProductHandler
);

// DELETE
router.delete(
  '/:id',
  [checkAuth, validateRequest(deleteProductSchema)],
  ProductHandler.deleteProductHandler
);

export default router;
