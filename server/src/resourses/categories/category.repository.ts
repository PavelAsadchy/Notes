import { getRepository, UpdateResult } from "typeorm";
import { Category } from "../../entities/category.model";
import { Note } from "../../entities/note.model";
import { NOT_FOUND_ERROR } from '../../errors/notFound.error';

const getAll = async (): Promise<Category[]> => getRepository(Category).find({ relations: ['notes'] });

const getById = async (id: string): Promise<Category> => {
  const entity = await getRepository(Category).findOne(id, { relations: ['notes'] });
  if (!entity) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  return entity;
};

const save = async (newCategoryParams: Category): Promise<Category> => {
  const { title, notes } = newCategoryParams;
  const categoryRepository = getRepository(Category);
  const noteRepository = getRepository(Note);

  const categoryNotes = notes.map((note: Note): Note => noteRepository.create(note));
  await noteRepository.save(categoryNotes);

  const newCategory = categoryRepository.create({ title, notes: categoryNotes });
  await categoryRepository.save(newCategory);
  return getById(newCategory.id);
};

const update = async (id: string, categoryUpdates: Category): Promise<Category> => {
  const { notes, ...restUpdates } = categoryUpdates;
  const categoryRepository = getRepository(Category);
  const noteRepository = getRepository(Note);

  const entity = await categoryRepository.findOne(id, { relations: ['notes'] });
  if (!entity) {
    throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);
  }
  
  notes.map(async (note: Note): Promise<UpdateResult> => await noteRepository.update(note.id, note));
  await categoryRepository.update(id, restUpdates );

  return getById(id);
};

const remove = async (id: string): Promise<void> => {
  const entity = await getRepository(Category).delete({ id });
  if (!entity) {
    throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);
  }
};

export default { getAll, getById, save, update, remove };
