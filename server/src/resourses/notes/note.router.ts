import express, { Request, Response } from 'express';
import noteService from './note.service';
import { asyncWrapper } from '../../utils/asyncWrapper';
import * as StatusCodes from '../../utils/statusCodes';

// Access parent route params with mergeParams: true
const noteRouter = express.Router({mergeParams: true});

noteRouter.route('/').get(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const tasks = await noteService.getAll(categoryId);
  res.status(StatusCodes.OK).json(tasks);
}));

noteRouter.route('/:id').get(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId, id } = req.params;
  const note = await noteService.getById(categoryId, id);
  res.status(StatusCodes.OK).json(note);
}));

noteRouter.route('/').post(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const newNote = req.body;
  const note = await noteService.save(categoryId, newNote);
  res.status(StatusCodes.CREATED).json(note);
}));

noteRouter.route('/:id').put(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId, id } = req.params;
  const noteUpdates = req.body;
  const note = await noteService.update(categoryId, id, noteUpdates);
  res.status(StatusCodes.OK).json(note);
}));

noteRouter.route('/:id').delete(asyncWrapper(async (req: Request, res: Response) => {
  const { categoryId, id } = req.params;
  await noteService.remove(categoryId, id);
  res.sendStatus(StatusCodes.NO_CONTENT);
}));

export { noteRouter };
