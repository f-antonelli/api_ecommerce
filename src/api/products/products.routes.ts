import { Router } from 'express';

import { checkAuth } from '../../middleware/check-auth';
import { validateRequest } from '../../middleware/validate-request';
import * as ProductHandler from './products.controller';
import {
  createProductSchema,
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
  [checkAuth, validateRequest(createProductSchema)],
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

router.delete('/', ProductHandler.deleteProductsHandler);

export default router;
