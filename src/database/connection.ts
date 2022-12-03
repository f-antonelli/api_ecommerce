import mongoose from 'mongoose';

import config from '../config';
import logger from '../helpers/logger';

const URI = `mongodb+srv://${config.MONGODB_USER!}:${config.MONGODB_PASSWORD!}@${config.MONGODB_CLUSTER!}/${config.MONGODB_DB!}?retryWrites=true&w=majority`;

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
