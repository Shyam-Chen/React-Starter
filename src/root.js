import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

const rootEpic = combineEpics(

);

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(rootReducer, applyMiddleware(createEpicMiddleware(rootEpic)));

export default store;
