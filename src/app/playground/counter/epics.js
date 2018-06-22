import { combineEpics } from 'redux-observable';
import { interval, empty } from 'rxjs';
import { delay, filter, map, switchMap, takeUntil } from 'rxjs/operators';

import { DECREMENT_ASYNC, DECREMENT_IF_EVEN, DECREMENT_IF_ODD, START_COUNT, CANCEL_COUNT } from './constants';
import { increment, decrement } from './actions';

export const decrementAsyncEpic = action$ =>
  action$.ofType(DECREMENT_ASYNC)
    .pipe(
      delay(1000),
      map(decrement),
    );

export const decrementIfEvenEpic = (action$, store) =>
  action$.ofType(DECREMENT_IF_EVEN)
    .pipe(
      filter(() => store.getState().counter.value % 2 === 0),
      map(decrement),
    );

export const decrementIfOddEpic = (action$, store) =>
  action$.ofType(DECREMENT_IF_ODD)
    .pipe(
      filter(() => Math.abs(store.getState().counter.value % 2) === 1),
      map(decrement),
    );

export const startCountEpic = action$ =>
  action$.ofType(START_COUNT)
    .pipe(
      switchMap(() =>
        interval(1000)
          .pipe(
            map(increment),
            takeUntil(action$.ofType(CANCEL_COUNT)),
          ),
      ),
    );

export const cancelCountEpic = action$ =>
  action$.ofType(CANCEL_COUNT)
    .pipe(
      switchMap(() => empty()),
    );

export default combineEpics(
  decrementAsyncEpic,
  decrementIfEvenEpic,
  decrementIfOddEpic,
  startCountEpic,
  cancelCountEpic,
);
