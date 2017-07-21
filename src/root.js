import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { onIincrementIfOddEpic } from './effects/counter';

import counter from './reducers/counter';
import rest from './reducers/rest';
import value from './reducers/value';
import modal from './reducers/modal';

const rootEpic = combineEpics(
  onIincrementIfOddEpic
);

const rootReducer = combineReducers({
  counter,
  rest,
  value,
  modal,
  routing: routerReducer
});

const store = createStore(
  rootReducer,
  // applyMiddleware(createEpicMiddleware(rootEpic))
);

export default store;
