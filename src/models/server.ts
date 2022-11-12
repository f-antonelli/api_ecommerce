import express, { Application } from 'express';

import connection from '../database/connection';
import HttpError from '../helpers/http-errors';
import router from '../routes';

class Server {
  private app: Application;

  private port: string;

  private db: () => Promise<void>;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';
    this.db = connection;

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server listining on port:', this.port);
    });
  }

  connectDB() {
    this.db()
      .then(() => console.log('Database successfully connected'))
      .catch(() => {
        const error = new HttpError('Could not connect to database.', 404);
        throw error;
      });
  }

  routes() {
    this.app.use('/', router);
  }

  middlewares() {
    this.app.use(express.json());

    this.app.use(() => {
      const error = new HttpError('Could not find this route.', 404);
      throw error;
    });
  }
}

export default Server;
