import { MessageResponse } from './message-response.interface';

export interface HttpError extends Error {
  statusCode: number;
}

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}
