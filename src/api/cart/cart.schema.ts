import { array, number, object, string, TypeOf } from 'zod';

const payload = {
  body: object({
    userId: string({
      required_error: 'UserID is required',
    }),
    total: number().optional(),
    products: array(
      object({
        productId: string({
          required_error: 'ProductID is required',
        }),
        quantity: number(),
        total: number(),
        name: string({
          required_error: 'Name is required',
        }),
        code: string({
          required_error: 'Code is required',
        }),
        description: string().optional(),
        image: string({
          required_error: 'Image is required',
        }),
        price: number({
          required_error: 'Price is required',
        }),
        stock: number({
          required_error: 'Stock is required',
        }),
      })
    ).optional(),
  }).strict(),
};

const params = {
  params: object({
    id: string({ required_error: 'Product ID is required' }),
  }),
};

export const getCartSchema = object({ ...params });
export const createCartSchema = object({ ...params });
export const updateCartSchema = object({ ...payload, ...params });
export const deleteCartSchema = object({ ...params });

// TYPES
export type createCartCartSchema = TypeOf<typeof createCartSchema>;
export type updateCartSchema = TypeOf<typeof updateCartSchema>;
export type getCartSchema = TypeOf<typeof getCartSchema>;
export type deleteCartSchema = TypeOf<typeof deleteCartSchema>;
