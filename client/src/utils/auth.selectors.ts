import {createSelector} from 'reselect';
import {AppState} from '../reducers/root.reducer';
import {AuthState} from '../utils/auth.type';

const authSelector = (state: AppState) => state.auth;

export const authLoadingSelector = createSelector(
    authSelector,
    (auth: AuthState) => auth.isLoading,
);

export const authErrorSelector = createSelector(
    authSelector,
    (auth: AuthState) => auth.error,
);

export const authUserSelector = createSelector(
    authSelector,
    (auth: AuthState) => auth.user,
);
