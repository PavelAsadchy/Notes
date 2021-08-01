import { getRepository } from "typeorm";
import { User } from "../../entities/user.model";
import { NOT_FOUND_ERROR } from '../../errors/notFound.error';

const getAll = async (): Promise<User[]> => getRepository(User).find();

const getById = async (id: string): Promise<User> => {
  const entity = await getRepository(User).findOne(id);
  if (!entity) throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);

  return entity;
};

const save = async (newUserParams: User): Promise<User> => {
  const userRepository = getRepository(User);
  const newUser = userRepository.create(newUserParams);
  await userRepository.save(newUser);
  return getById(newUser.id);
};

const update = async (id: string, userUpdates: User): Promise<User> => {
  const userRepository = getRepository(User);
  const entity = await userRepository.findOne(id);
  if (!entity) {
    throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);
  }

  await userRepository.update(id, userUpdates);
  return getById(id);
};

const remove = async (id: string): Promise<void> => {
  const entity = await getRepository(User).delete({ id });
  if (!entity) {
    throw new NOT_FOUND_ERROR(`Entity with ${id} not found`);
  }
};

export default { getAll, getById, save, update, remove };
