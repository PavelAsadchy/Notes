import { Note } from "./note.model";
import { NOT_FOUND_ERROR } from '../../errors/notFound.error';
import { MOCKED_DB as DB } from '../_mocked/mockedData';

const TABLE = 'Notes';

const getAll = async (categoryId: string): Promise<Note[]> => DB[TABLE].filter((note: Note) => note.categoryId === categoryId);

const getById = async (categoryId: string, id: string): Promise<Note> => {
  const entities = await getAll(categoryId);
  const entity = entities.find((note: Note) => note.id === id);
  if (!entity) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  return entity;
};

const save = async (categoryId: string, newNoteParams: Note): Promise<Note> => {
  const { title, order, description, isUrgent, userId } = newNoteParams;
  const newNote = new Note({title, order, description, isUrgent, userId, categoryId});
  DB[TABLE].push(newNote);
  return newNote;
};

const update = async (categoryId: string, id: string, noteUpdates: Note): Promise<Note> => {
  const noteToUpdate = await getById(categoryId, id);
  if (noteToUpdate && noteToUpdate.categoryId === categoryId) {
    DB[TABLE][DB[TABLE].indexOf(noteToUpdate)] = {...noteToUpdate, ...noteUpdates }
  }

  return getById(categoryId, id);
};

const remove = async (categoryId: string, id: string): Promise<void> => {
  const index = DB[TABLE].findIndex((note: Note) => note.id === id && note.categoryId === categoryId);
  if (index === -1) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  DB[TABLE].splice(index, 1);
};

const updateByMatch = async (categoryId: string): Promise<void> => {
  DB[TABLE]
    .filter((note: Note) => note.categoryId === categoryId)
    .map((note: Note) => note.categoryId = null);
};

const removeByMatch = async(userId: string) => {
  for (
    let i = DB[TABLE].findIndex((note: Note) => note.userId === userId);
    i >= 0;
    i = DB[TABLE].findIndex((note: Note) => note.userId === userId)
    ) {
    DB[TABLE].splice(i, 1);
  }
};

export default { getAll, getById, save, update, remove, updateByMatch, removeByMatch };
