import mongoose from 'mongoose';

import logger from '../helpers/logger';
import { DB } from './config/config';

const URI = `mongodb+srv://${DB.username}:${DB.password}@${DB.cluster}/${DB.database}?retryWrites=true&w=majority`;

const connection = async () => {
  try {
    await mongoose.connect(URI);
    logger.info('DB connected');
  } catch (error) {
    logger.error('Could not connect to db');
    process.exit(1);
  }
};

export default connection;
