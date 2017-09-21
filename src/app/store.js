import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loggerMiddleware from 'redux-logger';
import { createBrowserHistory } from 'history';

import { counter } from './counter';
import { crud } from './crud';
import { rest } from './rest';
import { dataTable } from './data-table';
import { formControls } from './form-controls';

const rootEpic = combineEpics(
  // ...
);

const rootReducer = combineReducers({
  counter,
  crud,
  rest,
  dataTable,
  formControls,
  router
});

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      routerMiddleware(createBrowserHistory()),
      thunkMiddleware,
      createEpicMiddleware(rootEpic),
      loggerMiddleware
    )
  );
