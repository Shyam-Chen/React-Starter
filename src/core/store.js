/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { useDispatch } from 'react-redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

import appReducer from '~/reducer';

import { history } from './Router';

const rootReducer = {
  app: appReducer,
  router: connectRouter(history),
};

const createReducerManager = initialReducers => {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);
  let keysToRemove = [];

  return {
    getReducerMap: () => reducers,
    reduce(state, action) {
      if (keysToRemove.length > 0) {
        state = { ...state };

        for (const key of keysToRemove) {
          delete state[key];
        }

        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add(key, reducer) {
      if (!key || reducers[key]) return;
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove(key) {
      if (!key || !reducers[key]) return;
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
};

const reducerManager = createReducerManager(rootReducer);

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

export const dynamic = (key, reducer) => WrappedComponent => {
  if (typeof key === 'string') {
    reducerManager.add(key, reducer);
  }

  if (Array.isArray(key)) {
    if (key.length === 2) {
      reducerManager.add(key[0], combineReducers({ [key[1]]: reducer }));
    }

    if (key.length === 3) {
      reducerManager.add(
        key[0],
        combineReducers({
          [key[1]]: combineReducers({ [key[2]]: reducer }),
        }),
      );
    }
  }

  const Dynamic = props => {
    const dispatch = useDispatch();
    dispatch({ type: '@@redux/INIT' });
    return <WrappedComponent {...props} />;
  };

  return Dynamic;
};
