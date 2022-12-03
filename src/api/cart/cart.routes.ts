import { Router } from 'express';

import { checkAuth } from '../../middleware/check-auth';
import { validateRequest } from '../../middleware/validate-request';
import * as CartHandler from './cart.controller';
import { createCartSchema, deleteCartSchema, getCartSchema, updateCartSchema } from './cart.schema';

const router = Router();

// GET
router.get('/:userId', [checkAuth, validateRequest(getCartSchema)], CartHandler.getCartHandler); // get cart

// POST
router.post(
  '/:userId',
  [checkAuth, validateRequest(createCartSchema)],
  CartHandler.createCartHandler
); // create cart
router.post('/:cartId/:prodId', CartHandler.addProdToCartHandler); // add product to cart

// UPDATE
router.put(
  '/:cartId',
  [checkAuth, validateRequest(updateCartSchema)],
  CartHandler.updateCartHandler
); // edit product from cart ( quantity )

// DELETE
router.delete(
  '/:cartId',
  [checkAuth, validateRequest(deleteCartSchema)],
  CartHandler.deleteCartHandler
); // delete cart
router.delete('/:cartId/:prodId', CartHandler.delProdFromCartHandler); // remove product from cart

export default router;
