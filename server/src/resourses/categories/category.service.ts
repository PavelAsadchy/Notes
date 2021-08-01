import categoriesRepo from './category.repository';
import { Category } from '../../entities/category.model';

const getAll = (): Promise<Category[]> => categoriesRepo.getAll();
const getById = (id: string): Promise<Category> => categoriesRepo.getById(id);
const save = (newCategory: Category): Promise<Category> => categoriesRepo.save(newCategory);
const update = (id: string, categoryUpdates: Category): Promise<Category> => categoriesRepo.update(id, categoryUpdates);
const remove = (id: string): Promise<void> => categoriesRepo.remove(id);

export default { getAll, getById, save, update, remove };
