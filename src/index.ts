import app from './app';
import config from './config';
import connection from './database/connection';

const port = config.PORT || 3001;

app.listen(port, async () => {
  console.log(`Listening: http://localhost:${port}`);

  await connection();
});
