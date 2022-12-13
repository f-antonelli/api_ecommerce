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
  TEST_EMAIL: process.env.TEST_EMAIL,
  TEST_USERNAME: process.env.TEST_USERNAME,
  TEST_PASSWORD: process.env.TEST_PASSWORD,
  TEST_CONF_PASSWORD: process.env.TEST_CONF_PASSWORD,
  TEST_ROLE: process.env.TEST_ROLE,
  TEST_CODE: process.env.TEST_CODE,
  TEST_NAME: process.env.TEST_NAME,
  TEST_DESCRIPTION: process.env.TEST_DESCRIPTION,
  TEST_IMAGE: process.env.TEST_IMAGE,
  TEST_PRICE: process.env.TEST_PRICE,
  TEST_STOCK: process.env.TEST_STOCK,
  TEST_ID: process.env.TEST_ID,
};
