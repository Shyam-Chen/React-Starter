// @flow

import {
  INCREMENT, DECREMENT, RESET,
  DECREMENT_ASYNC, DECREMENT_IF_EVEN, DECREMENT_IF_ODD,
  RESET_ASYNC, RESET_IF_EVEN, RESET_IF_ODD,
  START_COUNT, CANCEL_COUNT,
} from './constants';

/**
 * @name action-creators
 */

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

/**
 * @name Thunk
 */

export const incrementAsync = () =>
  dispatch =>
    setTimeout(() => dispatch(increment()), 1000);

export const incrementIfEven = () =>
  (dispatch, getState): boolean | Object =>
    getState().counter.value % 2 === 0 && dispatch(increment());

export const incrementIfOdd = () =>
  (dispatch, getState): boolean | Object =>
    Math.abs(getState().counter.value % 2) === 1 && dispatch(increment());

/**
 * @name Observable
 */

export const decrementAsync = () => ({ type: DECREMENT_ASYNC });
export const decrementIfEven = () => ({ type: DECREMENT_IF_EVEN });
export const decrementIfOdd = () => ({ type: DECREMENT_IF_ODD });

export const startCount = () => ({ type: START_COUNT });
export const cancelCount = () => ({ type: CANCEL_COUNT });

/**
 * @name Saga
 */

export const resetAsync = () => ({ type: RESET_ASYNC });
export const resetIfEven = () => ({ type: RESET_IF_EVEN });
export const resetIfOdd = () => ({ type: RESET_IF_ODD });
