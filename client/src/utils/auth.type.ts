export interface AuthState {
  user: object;
  isLoading: boolean;
  error: string;
};

export type AuthAction = {
  type: string;
  payload?: AuthState;
};

export const AuthActionType = {
  SIGN_IN_START: 'SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
};

export type DispatchAction = (args: AuthAction) => AuthAction;
