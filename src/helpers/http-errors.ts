class HttpError extends Error {
  private code: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.code = statusCode;
  }
}

export default HttpError;
