import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loggerMiddleware from 'redux-logger';

import { counterEpic, counterReducer } from './counter';
import { crud } from './crud';
import { rest } from './rest';
import { dataTable } from './data-table';
import { formControls } from './form-controls';

const rootEpic = combineEpics(
  counterEpic
);

const rootReducer = combineReducers({
  counter: counterReducer,
  crud,
  rest,
  dataTable,
  formControls,
  router: routerReducer
});

export default (history, preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      createEpicMiddleware(rootEpic),
      loggerMiddleware
    )
  );
