import { createStore, applyMiddleware, compose } from 'redux';
import { createReducerManager, bindReducerManager } from 'redux-dynamic-manager';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

import appReducer from '~/reducer';

import { history } from './Router';

const rootReducer = {
  app: appReducer,
  router: connectRouter(history),
};

const reducerManager = createReducerManager(rootReducer);

bindReducerManager(reducerManager);

export const configureStore = () => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducerManager.reduce,
    composeEnhancer(
      applyMiddleware(routerMiddleware(history), thunkMiddleware),
    ),
  );

  return store;
};
