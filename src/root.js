import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';
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

const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware, loggerMiddleware)
);

export default store;
