import { combineReducers, createStore } from 'redux';

import counter from './reducers/counter';
import rest from './reducers/rest';

const rootReducer = combineReducers({
  counter,
  rest
});

const store = createStore(rootReducer);

export default store;
