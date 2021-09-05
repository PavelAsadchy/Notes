import { AuthAction, AuthActionsType } from "../actions/auth.actions";
import { initialState } from "../store";
import { AuthState } from "../types";

export const authReducer = (
  state=initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionsType.AUTHENTICATE:
      return {
        ...state,
        isLoggedIn: true,
        user: 'placeholder-user'
      };

    case AuthActionsType.UNAUTHENTICATE:
      return {
        isLoggedIn: false,
        user: null
      };

    default:
      return state;
  }
};