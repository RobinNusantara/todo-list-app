import {createStore, applyMiddleware, Middleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root.reducer';

const middlewares: Array<Middleware> = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

export default store;
