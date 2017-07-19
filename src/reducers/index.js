import { combineReducers } from 'redux';

import counter from './counter';
import rest from './rest';

const rootReducer = combineReducers({
  counter, rest
});

export default rootReducer;
