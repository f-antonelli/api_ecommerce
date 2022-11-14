import { Router } from 'express';

import {
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
} from '../controllers/products.controller';
import productValidation from '../middleware/product-validaton';

const router = Router();

// GET
router.get('/', getProducts);
router.get('/:id', getProductsById);

// router.use(isAdmin);

// POST
router.post('/', productValidation, createProduct);

// PUT
router.put('/:id', updateProduct);

// DELETE
router.delete('/:id');

export default router;
