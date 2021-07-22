import { Request, Response, NextFunction } from "express";

type cbFunc = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>

export const asyncWrapper = (callback: cbFunc): cbFunc => (req: Request, res: Response, next: NextFunction) => callback(req, res, next).catch(next);
