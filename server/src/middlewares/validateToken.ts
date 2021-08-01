import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from "../common/config";
import * as StatusCodes from '../utils/statusCodes';

export const validateToken = (req: Request, res: Response, next: NextFunction): Response | void => {
  switch (req.url) {
    case '/':
    case '/login':
    case '/doc': {
      return next();
    }

    default: {
      const authHeader = req.headers.authorization;
      if (authHeader !== undefined) {
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer' || !token) {
          return res.status(StatusCodes.UNAUTHORIZED).send('Wrong auth scheme');
        }
    
        jwt.verify(token, JWT_SECRET_KEY);
        return next();
      }
    
      return res.status(StatusCodes.UNAUTHORIZED).send('Unauthorized');    
    }
  }
};