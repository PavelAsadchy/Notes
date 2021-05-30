import { Request, Response, NextFunction } from "express";

const asyncWrapper = (callback: Function) => (req: Request, res: Response, next: NextFunction) => callback(req, res, next).catch(next);

export default asyncWrapper;
