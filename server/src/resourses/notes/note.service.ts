import notesRepo from './note.repository';
import { Note } from '../../entities/note.model';

const getAll = (categoryId: string): Promise<Note[]> => notesRepo.getAll(categoryId);
const getById = (categoryId: string, id: string): Promise<Note> => notesRepo.getById(categoryId, id);
const save = (categoryId: string, newNote: Note): Promise<Note> => notesRepo.save(categoryId, newNote);
const update = (categoryId: string, id: string, noteUpdates: Note): Promise<Note> => notesRepo.update(categoryId, id, noteUpdates);
const remove = (categoryId: string, id: string): Promise<void> => notesRepo.remove(categoryId, id);

export default { getAll, getById, save, update, remove };
