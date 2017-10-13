import { combineEpics } from 'redux-observable';
import { delay, filter, map } from 'rxjs/operator';

import { DECREMENT_ASYNC, DECREMENT_IF_EVEN } from './constants';
import { decrement } from './actions';

export const decrementAsyncEpic = action$ =>
  action$.ofType(DECREMENT_ASYNC)
    ::delay(1000)
    ::map(decrement);

export const decrementIfEvenEpic = (action$, store) =>
  action$.ofType(DECREMENT_IF_EVEN)
    ::filter(() => store.getState().counter.value % 2 === 0)
    ::map(decrement);

export default combineEpics(
  decrementAsyncEpic,
  decrementIfEvenEpic
);
