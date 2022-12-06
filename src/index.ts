import app from './app';
import config from './config';
import connection from './database/connection';
import logger from './helpers/logger';

const port = config.PORT || 3001;

app.listen(port, async () => {
  logger.info(`Listening: http://localhost:${port}`);

  await connection();
});
