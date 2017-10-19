import { combineEpics } from 'redux-observable';
import { delay, filter, map } from 'rxjs/operator';

import { DECREMENT_ASYNC, DECREMENT_IF_EVEN, DECREMENT_IF_ODD } from './constants';
import { decrement } from './actions';

export const decrementAsyncEpic = action$ =>
  action$.ofType(DECREMENT_ASYNC)
    ::delay(1000)
    ::map(decrement);

export const decrementIfEvenEpic = (action$, store) =>
  action$.ofType(DECREMENT_IF_EVEN)
    ::filter(() => store.getState().counter.value % 2 === 0)
    ::map(decrement);

export const decrementIfOddEpic = (action$, store) =>
  action$.ofType(DECREMENT_IF_ODD)
    ::filter(() => Math.abs(store.getState().counter.value % 2) === 1)
    ::map(decrement);

export default combineEpics(
  decrementAsyncEpic,
  decrementIfEvenEpic,
  decrementIfOddEpic
);
