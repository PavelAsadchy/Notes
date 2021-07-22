import express, { Request, Response } from 'express';
import categoriesService from './category.service';
import { asyncWrapper } from '../../utils/asyncWrapper';
import * as StatusCodes from '../../utils/statusCodes';

const categoryRouter = express.Router();

categoryRouter.route('/').get(asyncWrapper(async (_req: Request, res: Response) => {
  const categories = await categoriesService.getAll();
  res.status(StatusCodes.OK).json(categories);
}));

categoryRouter.route('/:id').get(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await categoriesService.getById(id);
  res.status(StatusCodes.OK).json(category);
}));

categoryRouter.route('/').post(asyncWrapper(async (req: Request, res: Response) => {
  const newCategory = req.body;
  const category = await categoriesService.save(newCategory);
  res.status(StatusCodes.CREATED).json(category);
}));

categoryRouter.route('/:id').put(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const categoryUpdates = req.body;
  const category = await categoriesService.update(id, categoryUpdates);
  res.status(StatusCodes.OK).json(category);
}));

categoryRouter.route('/:id').delete(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  await categoriesService.remove(id);
  res.sendStatus(StatusCodes.NO_CONTENT);
}));

export { categoryRouter };
