import express, { Request, Response } from 'express';
import { asyncWrapper } from '../../utils/asyncWrapper';
import { signUser } from './login.service';
import * as StatusCode from '../../utils/statusCodes';

const loginRouter = express.Router();

loginRouter.route('/').post(asyncWrapper(async (req: Request, res: Response) => {
  const user = req.body;
  const token = await signUser(user);
  res.status(StatusCode.OK).json({ token });
}));

export { loginRouter };