import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import createHistory from 'history/createBrowserHistory'

import { counter } from './counter';
import { crud } from './crud';
import { rest } from './rest';
import { dataTable } from './data-table';

const history = createHistory();

const rootReducer = combineReducers({
  counter,
  crud,
  rest,
  dataTable,
  router: routerReducer
});

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      loggerMiddleware
    )
  );
