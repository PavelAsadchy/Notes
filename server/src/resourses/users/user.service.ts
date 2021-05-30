import usersRepo from './user.repository';
import { User } from './user.model';
// import taskService from '../tasks/task.service';

const getAll = (): Promise<User[]> => usersRepo.getAll();
const getById = (id: string): Promise<User> => usersRepo.getById(id);
const save = (newUser: User): Promise<User> => usersRepo.save(newUser);
const update = (id: string, userUpdates: User): Promise<User> => usersRepo.update(id, userUpdates);
const remove = (id: string): Promise<void> => {
  // taskService.removeByMatch(id);
  return usersRepo.remove(id);
};

export default { getAll, getById, save, update, remove };
