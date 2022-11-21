import { number, object, string, TypeOf } from 'zod';

const params = {
  params: object({
    userId: string({ required_error: 'User ID is required' }),
  }),
};

export const getCartSchema = object({ ...params });
export const createCartSchema = object({ ...params });
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
export type createCartCartSchema = TypeOf<typeof createCartSchema>;
export type updateCartSchema = TypeOf<typeof updateCartSchema>;
export type getCartSchema = TypeOf<typeof getCartSchema>;
export type deleteCartSchema = TypeOf<typeof deleteCartSchema>;
