import { EndpointResponse } from '../interfaces';

const response = ({ res, code = 200, status = true, message, body }: EndpointResponse) => {
  res.status(code).json({
    status,
    code,
    message,
    body,
  });
};

export default response;
