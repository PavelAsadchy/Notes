import express, { Request, Response } from 'express';
import { User } from './user.model';
import usersService from './user.service';
import { asyncWrapper } from '../../utils/asyncWrapper';
import * as StatusCodes from '../../utils/statusCodes';

const userRouter = express.Router();

userRouter.route('/').get(asyncWrapper(async (_req: Request, res: Response) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(StatusCodes.OK).json(users.map(User.toResponse));
}));

userRouter.route('/:id').get(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  res.status(StatusCodes.OK).json(User.toResponse(user));
}));

userRouter.route('/').post(asyncWrapper(async (req: Request, res: Response) => {
  const newUser = req.body;
  const user = await usersService.save(newUser);
  res.status(StatusCodes.CREATED).json(User.toResponse(user));
}));

userRouter.route('/:id').put(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userUpdates = req.body;
  const user = await usersService.update(id, userUpdates);
  res.status(StatusCodes.OK).json(User.toResponse(user));
}));

userRouter.route('/:id').delete(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  await usersService.remove(id);
  res.sendStatus(StatusCodes.NO_CONTENT);
}));

export { userRouter };
