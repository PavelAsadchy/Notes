// TODO: mock implementation. should be replaced during task development
import { User } from '../users/user.model';
import { Note } from '../notes/note.model';

export interface IMockedDB {
  Users: User[];
  Notes: Note[];
}

export const MOCKED_DB: IMockedDB = {
  Users: [],
  Notes: [],
};

const initMockedDB = (): void => {
  for (let i = 0; i < 3; i++) {
    const user = new User();
    MOCKED_DB.Users.push(new User());
    MOCKED_DB.Notes.push(new Note({userId: user.id}));
  }
};

initMockedDB();
