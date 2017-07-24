import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import counter from './reducers/counter';
import crud from './reducers/crud';
import rest from './reducers/rest';

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
