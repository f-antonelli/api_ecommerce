import app from './app';
import connection from './database/connection';

const port = process.env.PORT || 3001;

app.listen(port, async () => {
  console.log(`Listening: http://localhost:${port}`);

  await connection();
});
