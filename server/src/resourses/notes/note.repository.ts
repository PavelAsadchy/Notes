import { getRepository } from "typeorm";
import { Note } from "../../entities/note.model";
import { NOT_FOUND_ERROR } from '../../errors/notFound.error';

const getAll = async (categoryId: string): Promise<Note[]> => getRepository(Note).find({ where: { categoryId }});

const getById = async (categoryId: string, id: string): Promise<Note> => {
  const entity = await getRepository(Note).findOne(id, { where: { categoryId }});
  if (!entity) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  return entity;
};

const save = async (categoryId: string, newNoteParams: Note): Promise<Note> => {
  const noteRepository = getRepository(Note);
  const newNote = noteRepository.create({...newNoteParams, categoryId});
  await noteRepository.save(newNote);
  return getById(categoryId, newNote.id);
};

const update = async (categoryId: string, id: string, noteUpdates: Note): Promise<Note> => {
  const noteRepository = getRepository(Note);
  const entity = await noteRepository.findOne(id, { where: { categoryId }});
  if (!entity) {
    throw new NOT_FOUND_ERROR(`Entity with ${id} on category ${categoryId} not found`);
  }

  await noteRepository.update(id, noteUpdates);
  return getById(categoryId, noteUpdates.id);
};

const remove = async (categoryId: string, id: string): Promise<void> => {
  const entity = await getRepository(Note).delete({ categoryId, id });
  if (!entity) throw new NOT_FOUND_ERROR(`Entity with ${id} on category ${categoryId} not found`);
};

export default { getAll, getById, save, update, remove };
