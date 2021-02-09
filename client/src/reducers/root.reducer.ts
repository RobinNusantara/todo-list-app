import {combineReducers} from 'redux';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
