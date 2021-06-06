import express, { Request, Response } from 'express';
import noteService from './note.service';
import asyncWrapper from '../../utils/asyncWrapper';

// Access parent route params with mergeParams: true
const router = express.Router({mergeParams: true});

router.route('/').get(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const tasks = await noteService.getAll(categoryId);
  res.status(200).json(tasks);
}));

router.route('/:id').get(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId, id } = req.params;
  const note = await noteService.getById(categoryId, id);
  res.status(200).json(note);
}));

router.route('/').post(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const newNote = req.body;
  const note = await noteService.save(categoryId, newNote);
  res.status(201).json(note);
}));

router.route('/:id').put(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId, id } = req.params;
  const noteUpdates = req.body;
  const note = await noteService.update(categoryId, id, noteUpdates);
  res.status(200).json(note);
}));

router.route('/:id').delete(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId, id } = req.params;
  await noteService.remove(categoryId, id);
  res.sendStatus(204);
}));

export default router;
