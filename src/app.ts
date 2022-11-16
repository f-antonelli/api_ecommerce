import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import api from './api';
import MessageResponse from './interfaces/message-response.interface';
import { errorHandler } from './middleware/error-handler';
import { notFound } from './middleware/not-found';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
