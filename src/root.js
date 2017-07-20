import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './reducers/counter';
import rest from './reducers/rest';
import value from './reducers/value';
import modal from './reducers/modal';

const rootReducer = combineReducers({
  counter,
  rest,
  value,
  modal,
  routing: routerReducer
});

const store = createStore(rootReducer);

export default store;
