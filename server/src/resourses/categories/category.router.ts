import express, { Request, Response } from 'express';
import categoriesService from './category.service';
import asyncWrapper from '../../utils/asyncWrapper';

const router = express.Router();

router.route('/').get(asyncWrapper(async (_req: Request, res: Response) => {
  const categories = await categoriesService.getAll();
  res.status(200).json(categories);
}));

router.route('/:id').get(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await categoriesService.getById(id);
  res.status(200).json(category);
}));

router.route('/').post(asyncWrapper(async (req: Request, res: Response) => {
  const newCategory = req.body;
  const category = await categoriesService.save(newCategory);
  res.status(201).json(category);
}));

router.route('/:id').put(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const categoryUpdates = req.body;
  const category = await categoriesService.update(id, categoryUpdates);
  res.status(200).json(category);
}));

router.route('/:id').delete(asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  await categoriesService.remove(id);
  res.sendStatus(204);
}));

export default router;
