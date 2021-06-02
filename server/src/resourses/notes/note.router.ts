// import express, { Request, Response } from 'express';
// import noteService from './note.service';
// import asyncWrapper from '../../utils/asyncWrapper';

// // Access parent route params with mergeParams: true
// const router = express.Router({mergeParams: true});

// router.route('/').get(asyncWrapper(async (req: Request, res: Response) => {
//   const { boardId } = req.params;
//   const tasks = await noteService.getAll(boardId);
//   res.status(200).json(tasks);
// }));

// router.route('/:id').get(asyncWrapper(async (req: Request, res: Response) => {
//   const { boardId, id } = req.params;
//   const task = await noteService.getById(boardId, id);
//   res.status(200).json(task);
// }));

// router.route('/').post(asyncWrapper(async (req: Request, res: Response) => {
//   const { boardId } = req.params;
//   const newTask = req.body;
//   const task = await noteService.save(boardId, newTask);
//   res.status(201).json(task);
// }));

// router.route('/:id').put(asyncWrapper(async (req: Request, res: Response) => {
//   const { boardId, id } = req.params;
//   const taskUpdates = req.body;
//   const task = await noteService.update(boardId, id, taskUpdates);
//   res.status(200).json(task);
// }));

// router.route('/:id').delete(asyncWrapper(async (req: Request, res: Response) => {
//   const { boardId, id } = req.params;
//   await noteService.remove(boardId, id);
//   res.sendStatus(204);
// }));

// export default router;
