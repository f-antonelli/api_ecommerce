import { number, object, string, TypeOf } from 'zod';

const payload = {
  body: object({
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
  }).strict(),
};

const params = {
  params: object({
    id: string({ required_error: 'Product ID is required' }),
  }),
};

export const getProductSchema = object({ ...params });
export const createProductSchema = object({ ...payload });
export const updateProductSchema = object({ ...payload, ...params });
export const deleteProductSchema = object({ ...params });

// TYPES
export type createProductSchema = TypeOf<typeof createProductSchema>;
export type updateProductSchema = TypeOf<typeof updateProductSchema>;
export type getProductSchema = TypeOf<typeof getProductSchema>;
export type deleteProductSchema = TypeOf<typeof deleteProductSchema>;
