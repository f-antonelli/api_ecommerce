import express, { Request, Response } from 'express';

import MessageResponse from '../interfaces/message-response.interface';
import auth from './auth/auth.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API :)',
  });
});

//  healtcheck
router.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

//  API routes
router.use('/auth', auth);

export default router;
