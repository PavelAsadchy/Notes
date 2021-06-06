// TODO: mock implementation. should be replaced during task development
import { User } from '../users/user.model';
import { Category } from '../categories/category.model';
import { Note } from '../notes/note.model';

export interface IMockedDB {
  Users: User[];
  Categories: Category[];
  Notes: Note[];
}

export const MOCKED_DB: IMockedDB = {
  Users: [],
  Categories: [],
  Notes: [],
};

const initMockedDB = (): void => {
  MOCKED_DB.Users.push(new User());
  for (let i = 0; i < 3; i++) {
    const category = new Category();
    MOCKED_DB.Categories.push(category);
    MOCKED_DB.Notes.push(new Note({categoryId: category.id}));
  }
};

initMockedDB();
