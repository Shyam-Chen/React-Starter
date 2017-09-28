import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loggerMiddleware from 'redux-logger';

import { counterEpic, counterReducer } from './counter';
import { crudReducer } from './crud';
import { restReducer } from './rest';
import { dataTableReducer } from './data-table';
import { formControlsReducer } from './form-controls';

const rootEpic = combineEpics(
  counterEpic
);

const rootReducer = combineReducers({
  counter: counterReducer,
  crud: crudReducer,
  rest: restReducer,
  dataTable: dataTableReducer,
  formControls: formControlsReducer,
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
