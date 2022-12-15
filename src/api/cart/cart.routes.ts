import { Router } from 'express';

import { checkAuth } from '../../middleware/check-auth';
import { validateRequest } from '../../middleware/validate-request';
import {
  addProdToCartHandler,
  createCartHandler,
  deleteCartHandler,
  delProdFromCartHandler,
  getCartHandler,
  updateCartHandler,
} from './cart.controller';
import { createCartSchema, deleteCartSchema, getCartSchema, updateCartSchema } from './cart.schema';

const router = Router();

// GET
router.get('/:userId', [checkAuth, validateRequest(getCartSchema)], getCartHandler); // get cart

// POST
router.post('/:userId', [checkAuth, validateRequest(createCartSchema)], createCartHandler); // create cart
router.post('/:cartId/:prodId', addProdToCartHandler); // add product to cart

// UPDATE
router.put('/:cartId', [checkAuth, validateRequest(updateCartSchema)], updateCartHandler); // edit product from cart ( quantity )

// DELETE
router.delete('/:cartId', [checkAuth, validateRequest(deleteCartSchema)], deleteCartHandler); // delete cart
router.delete('/:cartId/:prodId', delProdFromCartHandler); // remove product from cart

export default router;
