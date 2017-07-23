import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
// import { combineEpics, createEpicMiddleware } from 'redux-observable';

// import { onIincrementIfOddEpic } from './effects/counter';

import counter from './reducers/counter';
import rest from './reducers/rest';
import value from './reducers/value';
import modal from './reducers/modal';
import crud from './reducers/crud';

// const rootEpic = combineEpics(
//   onIincrementIfOddEpic
// );

const rootReducer = combineReducers({
  counter,
  rest,
  value,
  modal,
  crud,
  routing: routerReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware, loggerMiddleware)
  // applyMiddleware(createEpicMiddleware(rootEpic))
);

export default store;
