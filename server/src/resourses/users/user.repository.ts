import { User } from "./user.model";
import { NOT_FOUND_ERROR } from '../../errors/notFound.error';
import { MOCKED_DB as DB } from '../_mocked/mockedData';

const TABLE = 'Users';

const getAll = async (): Promise<User[]> => DB[TABLE];

const getById = async (id: string): Promise<User> => {
  const entity = await DB[TABLE].find((user: User) => user.id === id);
  if (!entity) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  return entity;
};

const save = async (newUserParams: User): Promise<User> => {
  const { name, login, password } = newUserParams;
  const newUser = new User({name, login, password});
  DB[TABLE].push(newUser);
  return newUser;
};

const update = async (id: string, userUpdates: User): Promise<User> => {
  const userToUpdate = await getById(id);
  if (userToUpdate) DB[TABLE][DB[TABLE].indexOf(userToUpdate)] = {...userToUpdate, ...userUpdates };

  return getById(id);
};

const remove = async (id: string): Promise<void> => {
  const index = DB[TABLE].findIndex((user: User) => user.id === id);
  if (index === -1) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  DB[TABLE].splice(index, 1);
};

export default { getAll, getById, save, update, remove };
