export class HttpError extends Error {
  statusCode: number;

  constructor(message: string, errorCode: number) {
    super(message);
    this.statusCode = errorCode;
  }
}
