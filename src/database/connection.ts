import mongoose from 'mongoose';

import { DB } from './config/config';

const connection = async () => {
  const URI = `mongodb+srv://${DB.username}:${DB.password}@${DB.cluster}/${DB.database}?retryWrites=true&w=majority`;
  await mongoose.connect(URI);
};

export default connection;
