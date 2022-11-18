import jwt from 'jsonwebtoken';

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, process.env.SECRET_KEY as string, {
    ...(options && options),
  });
}
