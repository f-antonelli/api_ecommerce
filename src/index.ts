import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world');
});

app.listen(() => {
  console.log('Server listining on port:', PORT);
});
