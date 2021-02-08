import {AuthState, AuthAction, AuthActionType, DispatchType} from '../utils/auth.type';
import {Values as SignInValue} from '../components/signin-form';
import axios from 'axios';

function signInStart() {
  const action: AuthAction = {
    type: AuthActionType.SIGN_IN_START,
  };
  return action;
}

function signInSuccess(user: AuthState) {
  const action: AuthAction = {
    type: AuthActionType.SIGN_IN_START,
    payload: user,
  };
  return action;
}

function signInFailed(error: AuthState) {
  const action: AuthAction = {
    type: AuthActionType.SIGN_IN_FAILED,
    payload: error,
  };
  return action;
};

export function signIn(values: SignInValue) {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(signInStart());
      const baseUrl: string = 'http://localhost:4000/api/v1/auth/signin';
      const data: SignInValue = {
        email: values.email,
        password: values.password,
      };
      const response = await axios.post(baseUrl, data);
      const {token} = response.data;
      dispatch(signInSuccess(token));
    } catch (error) {
      dispatch(signInFailed(error.response.data));
    }
  };
}
