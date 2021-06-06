import { Request, Response, NextFunction } from "express";
import { log } from '../utils/logger';
import { finished } from 'stream';

export const loggingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
  ): void => {
    const { method, url } = req;
    const start = process.hrtime.bigint(); //Date.now()

    next();

    finished(res, () => {
      const ms = process.hrtime.bigint() - start;
      const { statusCode } = res;
      log(`${method} ${url} ${statusCode} [${ms / 1000000n}ms]`);
    });
};