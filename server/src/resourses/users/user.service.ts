import usersRepo from './user.repository';
import { User } from '../../entities/user.model';

const getAll = (): Promise<User[]> => usersRepo.getAll();
const getById = (id: string): Promise<User> => usersRepo.getById(id);
const save = (newUser: User): Promise<User> => usersRepo.save(newUser);
const update = (id: string, userUpdates: User): Promise<User> => usersRepo.update(id, userUpdates);
const remove = (id: string): Promise<void> => usersRepo.remove(id);

export default { getAll, getById, save, update, remove };
