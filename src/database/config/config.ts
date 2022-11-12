import dotenv from 'dotenv';

dotenv.config();

export const DB = {
  username: process.env.MONGODB_USER as string,
  password: process.env.MONGODB_PASSWORD as string,
  cluster: process.env.MONGODB_CLUSTER as string,
  database: process.env.MONGODB_BBDD as string,
};
