import { Request, Response, NextFunction } from 'express';
import { NOT_FOUND_ERROR } from '../errors/notFound.error';
import { errorLog } from '../utils/logger';

export const errorHandling = (
  err: Error | NOT_FOUND_ERROR,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
  ): void => {
    errorLog(err.message);
    if (err instanceof NOT_FOUND_ERROR) {
      res.status(err.status).send('Not Found');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }