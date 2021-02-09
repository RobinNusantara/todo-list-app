import {AuthState, AuthAction, AuthActionType} from '../utils/auth.type';

const initialState: AuthState = {
  user: {},
  isLoading: false,
  error: '',
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionType.SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: '',
      };
    case AuthActionType.SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
