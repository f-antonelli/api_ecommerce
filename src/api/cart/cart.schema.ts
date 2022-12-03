import { number, object, string, TypeOf } from 'zod';

export const getCartSchema = object({
  params: object({
    userId: string({ required_error: 'User ID is required' }),
  }),
});

export const createCartSchema = object({
  params: object({
    userId: string({ required_error: 'User ID is required' }),
  }),
});

export const addProdToCartSchema = object({
  body: object({
    quantity: number(),
  }).strict(),
  params: object({
    cartId: string({ required_error: 'Cart ID is required' }),
    productId: string({ required_error: 'Product ID is required' }),
  }),
});

export const updateCartSchema = object({
  body: object({
    productId: string({ required_error: 'Product ID is required' }),
    quantity: number(),
  }).strict(),
  params: object({
    cartId: string({ required_error: 'Cart ID is required' }),
  }),
});

export const deleteCartSchema = object({
  params: object({
    cartId: string({ required_error: 'Cart ID is required' }),
  }),
});

// TYPES
export type addProdToCartSchema = TypeOf<typeof addProdToCartSchema>;
export type createCartCartSchema = TypeOf<typeof createCartSchema>;
export type updateCartSchema = TypeOf<typeof updateCartSchema>;
export type getCartSchema = TypeOf<typeof getCartSchema>;
export type deleteCartSchema = TypeOf<typeof deleteCartSchema>;
