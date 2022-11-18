import { number, object, string, TypeOf } from 'zod';

export const productsSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    code: string({
      required_error: 'Code is required',
    }),
    description: string(),
    image: string({
      required_error: 'Image is required',
    }),
    price: number({
      required_error: 'Price is required',
    }),
    stock: number({
      required_error: 'Stock is required',
    }),
  }),
});

export type loginUserSchema = TypeOf<typeof productsSchema>;
