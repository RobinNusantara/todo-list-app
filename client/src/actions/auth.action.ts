import {AuthState, AuthAction, AuthActionType, DispatchAction} from '../utils/auth.type';
import {Values as LoginValues} from '../components/signin-form';
import {Values as RegisValues} from '../components/signup-form';
import client from '../api/api';

function signInStart(): AuthAction {
  const action: AuthAction = {
    type: AuthActionType.SIGN_IN_START,
  };
  return action;
}

function signInSuccess(user: AuthState): AuthAction {
  const action: AuthAction = {
    type: AuthActionType.SIGN_IN_SUCCESS,
    payload: user,
  };
  return action;
}

function signInFailed(error: AuthState): AuthAction {
  const action: AuthAction = {
    type: AuthActionType.SIGN_IN_FAILED,
    payload: error,
  };
  return action;
}

export function signIn(values: LoginValues) {
  return async (dispatch: DispatchAction) => {
    try {
      const data = {
        email: values.email,
        password: values.password,
      };

      dispatch(signInStart());
      const response = await client.post('/auth/signin', data);
      const {token} = response.data;
      dispatch(signInSuccess(token));
    } catch (error) {
      const {message} = error.response.data;
      dispatch(signInFailed(message));
    }
  };
}

export function signUp(values: RegisValues) {
  return async (dispatch: DispatchAction) => {
    try {

    } catch (error) {

    }
  };
}
