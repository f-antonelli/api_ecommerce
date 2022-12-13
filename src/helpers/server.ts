import express from 'express';

import api from '../api';

function server() {
  const app = express();

  app.use(express.json());

  app.use('/api/v1', api);

  return app;
}

export default server;
