import notesRepo from './note.repository';
import { Note } from './note.model';

const getAll = (categoryId: string): Promise<Note[]> => notesRepo.getAll(categoryId);
const getById = (categoryId: string, id: string): Promise<Note> => notesRepo.getById(categoryId, id);
const save = (categoryId: string, newNote: Note): Promise<Note> => notesRepo.save(categoryId, newNote);
const update = (categoryId: string, id: string, noteUpdates: Note): Promise<Note> => notesRepo.update(categoryId, id, noteUpdates);
const remove = (categoryId: string, id: string): Promise<void> => notesRepo.remove(categoryId, id);

const updateByCategory = (categoryId: string): Promise<void> => notesRepo.updateByMatch(categoryId);
const removeByUser = (userId: string): Promise<void> => notesRepo.removeByMatch(userId);

export default { getAll, getById, save, update, remove, updateByCategory, removeByUser };
