import { object, string, TypeOf } from 'zod';

const payload = {
  body: object({
    username: string({
      required_error: 'Name is required',
    }),
    role: string(),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - should be 6 chars minimum'),
    passwordConfirmation: string({
      required_error: 'passwordConfirmation is required',
    }),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  }),
};

const params = {
  params: object({
    id: string({ required_error: 'Product ID is required' }),
  }),
};

export const createUserSchema = object({ ...payload });
export const getUserSchema = object({ ...params });
export const delUserSchema = object({ ...params });

export const updateUserSchema = object({
  body: object({
    username: string({
      required_error: 'Name is required',
    }),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }),
  ...params,
});

export type createUserSchema = Omit<TypeOf<typeof createUserSchema>, 'body.passwordConfirmation'>;
export type getUserSchema = TypeOf<typeof getUserSchema>;
export type updateUserSchema = TypeOf<typeof updateUserSchema>;
export type delUserSchema = TypeOf<typeof delUserSchema>;
