import { getRepository } from "typeorm";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../entities/user.model';
import { JWT_SECRET_KEY } from "../../common/config";
import { BAD_REQUEST_ERROR } from "../../errors/badRequest.error";
import { UNAUTHORIZED_ERROR } from "../../errors/unauthorized.error";

export const signUser = async (user: Partial<User>): Promise<string> => {
  const { login, password } = user;
  const fetchedUser = await getRepository(User).findOne({ login });
  if (!fetchedUser) throw new BAD_REQUEST_ERROR('Incorrect login name');

  const isMatch = await bcrypt.compare(password, fetchedUser.password);
  if (!isMatch) throw new UNAUTHORIZED_ERROR('Incorrect password');

  const payload = { userId: fetchedUser.id, login: fetchedUser.login };
  return jwt.sign(payload, JWT_SECRET_KEY);
};