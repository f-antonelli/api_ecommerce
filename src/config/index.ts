import dotenv from 'dotenv';

dotenv.config();

export default {
  EXPIRES: process.env.EXPIRES,
  LOG_ENABLED: process.env.LOG_ENABLED,
  MONGODB_CLUSTER: process.env.MONGODB_CLUSTER,
  MONGODB_DB: process.env.MONGODB_BBD,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  MONGODB_USER: process.env.MONGODB_USER,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SALT: process.env.SALT,
  SECRET_KEY: process.env.SECRET_KEY,
};
