import { ThunkDispatch as Dispatch } from 'redux-thunk';

export enum AuthActionsType {
  AUTHENTICATE = '[AUTH] Authenticate',
  UNAUTHENTICATE = '[AUTH] Unauthenticate',
}

export interface IAuthenticate {
  type: AuthActionsType.AUTHENTICATE;
}

export interface IUnauthenticate {
  type: AuthActionsType.UNAUTHENTICATE;
}

export const AUTHENTICATE_ACTION = (): IAuthenticate => ({
  type: AuthActionsType.AUTHENTICATE
});

export const UNAUTHENTICATE_ACTION = (): IUnauthenticate => ({
  type: AuthActionsType.UNAUTHENTICATE
});

export type AuthAction = IAuthenticate | IUnauthenticate;

export const logIn = () => {
  return async (dispatch: Dispatch<AuthAction, {}, any>) => {
    await window.localStorage.setItem('authenticated', 'true');
    dispatch(AUTHENTICATE_ACTION());
  };
};

export const logOut = () => {
  return async (dispatch: Dispatch<AuthAction, {}, any>) => {
    await window.localStorage.setItem('authenticated', 'false');
    dispatch(UNAUTHENTICATE_ACTION());
  };
};

export const checkAuthentication = () => {
  return async (dispatch: Dispatch<AuthAction, {}, any>) => {
    const auth = await window.localStorage.getItem('authenticated');
    const formattedAuth = typeof auth === 'string'
      ? JSON.parse(auth)
      : null;

    formattedAuth
      ? dispatch(AUTHENTICATE_ACTION())
      : dispatch(UNAUTHENTICATE_ACTION());
  };
}