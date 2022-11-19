import jwt from 'jsonwebtoken';

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, process.env.SECRET_KEY as string, {
    ...(options && options),
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);

    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    };
  }
}
