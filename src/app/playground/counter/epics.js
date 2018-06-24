import { combineEpics, ofType } from 'redux-observable';
import { interval, empty } from 'rxjs';
import { delay, filter, map, switchMap, takeUntil } from 'rxjs/operators';

import { DECREMENT_ASYNC, DECREMENT_IF_EVEN, DECREMENT_IF_ODD, START_COUNT, CANCEL_COUNT } from './constants';
import { increment, decrement } from './actions';

export const decrementAsyncEpic = action$ =>
  action$.pipe(
    ofType(DECREMENT_ASYNC),
    delay(1000),
    map(decrement),
  );

export const decrementIfEvenEpic = (action$, state$) =>
  action$.pipe(
    ofType(DECREMENT_IF_EVEN),
    filter(() => state$.value.counter.value % 2 === 0),
    map(decrement),
  );

export const decrementIfOddEpic = (action$, state$) =>
  action$.pipe(
    ofType(DECREMENT_IF_ODD),
    filter(() => Math.abs(state$.value.counter.value % 2) === 1),
    map(decrement),
  );

export const startCountEpic = action$ =>
  action$.pipe(
    ofType(START_COUNT),
    switchMap(() =>
      interval(1000)
        .pipe(
          map(increment),
          takeUntil(action$.pipe(ofType(CANCEL_COUNT))),
        ),
    ),
  );

export const cancelCountEpic = action$ =>
  action$
    .pipe(
      ofType(CANCEL_COUNT),
      switchMap(() => empty()),
    );

export default combineEpics(
  decrementAsyncEpic,
  decrementIfEvenEpic,
  decrementIfOddEpic,
  startCountEpic,
  cancelCountEpic,
);
