import dotenv from 'dotenv';

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  EXPIRES: process.env.EXPIRES,
  SALT: process.env.SALT,
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  MONGODB_CLUSTER: process.env.MONGODB_CLUSTER,
  MONGODB_DB: process.env.MONGODB_BBD,
};
