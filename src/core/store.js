import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import watchApp from '~/sagas';
import appEpic from '~/epics';
import appReducer from '~/reducer';

import crudOperations from '~/shell/crud-operations/reducer';

const rootSaga = function* rootSaga() {
  yield all([
    watchApp(),
  ]);
};

const rootEpic = combineEpics(
  appEpic,
);

const rootReducer = history =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history),
    crudOperations,
  });

export default (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer(history),
    undefined,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        sagaMiddleware,
        epicMiddleware,
        createLogger({ diff: true }),
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);
  epicMiddleware.run(rootEpic);

  return store;
};
