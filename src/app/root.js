import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { counter } from './counter';
import { crud } from './crud';
import { rest } from './rest';

const rootReducer = combineReducers({
  counter,
  crud,
  rest,
  routing: routerReducer
});

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
