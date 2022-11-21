import { Response } from 'express';

export interface EndpointResponse {
  body: unknown;
  code?: number;
  message?: string;
  res: Response;
  status?: boolean;
}
