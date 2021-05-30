import express, { Request, Response } from 'express';
import { User } from './user.model';
import usersService from './user.service';
import asyncWrapper from '../../utils/asyncWrapper';

const router = express.Router();

router.route('/').get(asyncWrapper(async (_req: Request, res: Response) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(200).json(users.map(User.toResponse));
}));

router.route('/:id').get(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  res.status(200).json(User.toResponse(user));
}));

router.route('/').post(asyncWrapper(async (req: Request, res: Response) => {
  const newUser = req.body;
  const user = await usersService.save(newUser);
  res.status(201).json(User.toResponse(user));
}));

router.route('/:id').put(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userUpdates = req.body;
  const user = await usersService.update(id, userUpdates);
  res.status(200).json(User.toResponse(user));
}));

router.route('/:id').delete(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  await usersService.remove(id);
  res.sendStatus(204);
}));

export default router;
