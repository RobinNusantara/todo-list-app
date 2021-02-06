import {Request, Response, NextFunction} from 'express';
import HttpException from '../helpers/http-exception';

function errorHandler(error: HttpException, req: Request, res: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  res.status(status).send({
    status,
    message,
  });
}

export default errorHandler;
