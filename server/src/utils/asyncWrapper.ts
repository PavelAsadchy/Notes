import { Request, Response, NextFunction } from "express";

type cbFunc = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>

const asyncWrapper = (callback: cbFunc): cbFunc => (req: Request, res: Response, next: NextFunction) => callback(req, res, next).catch(next);

export default asyncWrapper;
