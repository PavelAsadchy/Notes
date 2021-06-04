import { Category } from "./category.model";
import { NOT_FOUND_ERROR } from '../../errors/notFound.error';
import { MOCKED_DB as DB } from '../_mocked/mockedData';

const TABLE = 'Categories';

const getAll = async (): Promise<Category[]> => DB[TABLE];

const getById = async (id: string): Promise<Category> => {
  const entity = await DB[TABLE].find((category: Category) => category.id === id);
  if (!entity) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  return entity;
};

const save = async (newCategoryParams: Category): Promise<Category> => {
  const { title, order } = newCategoryParams;
  const newCategory = new Category({title, order});
  DB[TABLE].push(newCategory);
  return newCategory;
};

const update = async (id: string, categoryUpdates: Category): Promise<Category> => {
  const categoryToUpdate = await getById(id);
  if (categoryToUpdate) DB[TABLE][DB[TABLE].indexOf(categoryToUpdate)] = {...categoryToUpdate, ...categoryUpdates };

  return getById(id);
};

const remove = async (id: string): Promise<void> => {
  const index = DB[TABLE].findIndex((category: Category) => category.id === id);
  if (index === -1) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  DB[TABLE].splice(index, 1);
};

export default { getAll, getById, save, update, remove };
