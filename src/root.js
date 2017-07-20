import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux'

import counter from './reducers/counter';
import rest from './reducers/rest';

const rootReducer = combineReducers({
  counter,
  rest,
  routing: routerReducer
});

const store = createStore(rootReducer);

export default store;
