import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import server from './helpers/server';
import { MessageResponse } from './interfaces';
import { errorHandler } from './middleware/error-handler';
import { notFound } from './middleware/not-found';

const app = server();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
