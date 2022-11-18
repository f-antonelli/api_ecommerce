import { Router } from 'express';

import * as ProductHandler from './products.controller';

const router = Router();

// GET
router.get('/', ProductHandler.getProductsHandler);
router.get('/:id', ProductHandler.getProductByIdHandler);

// POST
router.post('/', ProductHandler.createProductHandler);

// UPDATE
router.put('/:id', ProductHandler.updateProductHandler);

// DELETE
router.delete('/:id', ProductHandler.deleteProductHandler);

export default router;
