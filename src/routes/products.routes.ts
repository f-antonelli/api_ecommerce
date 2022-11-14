import { Router } from 'express';

import { createProduct, getProducts, getProductsById } from '../controllers/products.controller';

const router = Router();

// GET routes
router.get('/', getProducts);
router.get('/:id', getProductsById);

// router.use(isAdmin);

// POST routes
router.post('/', createProduct);

// PUT routes
router.put('/:id');

// DELETE routes
router.delete('/:id');

export default router;
