//user reducer types
export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';

//UI reducer types
export const SET_ERRORS = 'SET_ERRORS';
export const LOADING_UI = 'LOADING_UI';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export type NewUser = {
  username: string,
  email: string,
  password: string
}

interface LoggedUser {
  id: string;
  username: string;
  jwt: string;
  refreshToken: string;
  roles: [];
}

export interface AuthState {
  isLoggedIn: boolean | null;
  user: string | null;
  // user: LoggedUser;
}
