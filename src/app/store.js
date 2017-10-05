import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loggerMiddleware from 'redux-logger';

import { counterEpic, counterReducer } from '~/counter';
import { crudReducer } from '~/crud';
import { restReducer } from '~/rest';
import { graphqlReducer } from '~/graphql';
import { formControlsReducer } from '~/form-controls';
import { dataTableReducer } from '~/data-table';

import appEpic from './epics';
import appReducer from './reducer';

const rootEpic = combineEpics(
  appEpic,
  counterEpic
);

const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer,

  counter: counterReducer,
  crud: crudReducer,
  rest: restReducer,
  graphql: graphqlReducer,
  formControls: formControlsReducer,
  dataTable: dataTableReducer
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
