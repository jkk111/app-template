import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils';

const loggerMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { method, path } = request;

  response.on('finish', () => {
    logger.info({
      code: response.statusCode,
      method,
      path,
    });
  });

  next();
};

export default loggerMiddleware;
