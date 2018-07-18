import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import appEpic from '~/epics';
import appReducer from '~/reducer';
import watchApp from '~/sagas';

const rootEpic = combineEpics(
  appEpic,
);

const rootReducer = combineReducers({
  app: appReducer,
});

const rootSaga = function *() {
  yield all([
    watchApp(),
  ]);
};

export default (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      epicMiddleware,
      sagaMiddleware,
      createLogger({ diff: true }),
    ),
  );

  sagaMiddleware.run(rootSaga);
  epicMiddleware.run(rootEpic);

  return store;
};
