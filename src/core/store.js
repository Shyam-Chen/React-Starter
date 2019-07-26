import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import appReducer from '~/reducer';

import crudOperations from '~/shell/crud-operations/reducer';

const rootReducer = history => combineReducers({
  app: appReducer,
  router: connectRouter(history),
  crudOperations,
});

export default (history) => {
  const store = createStore(
    rootReducer(history),
    undefined,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        createLogger({ diff: true }),
      ),
    ),
  );

  return store;
};
