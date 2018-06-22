import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import appEpic from '~/epics';
import appReducer from '~/reducer';
import watchApp from '~/sagas';
import { crudReducer } from '~/crud-operations/crud';
import { restEpic, restReducer, watchRest } from '~/crud-operations/rest';
import { graphqlReducer } from '~/crud-operations/graphql';
import { formControls } from '~/form-controls';
import { dataTableReducer } from '~/data-table';
import { authorizationReducer } from '~/authorization';
import { counterEpic, counterReducer, watchCounter } from '~/playground/counter';

const rootEpic = combineEpics(
  appEpic,

  counterEpic,
  restEpic,
);

const rootReducer = combineReducers({
  app: appReducer,

  counter: counterReducer,
  crud: crudReducer,
  rest: restReducer,
  graphql: graphqlReducer,
  formControls,
  dataTable: dataTableReducer,
  authorization: authorizationReducer,
});

const rootSaga = function *() {
  yield all([
    watchApp(),

    watchCounter(),
    watchRest(),
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
