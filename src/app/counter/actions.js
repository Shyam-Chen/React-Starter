import {
  INCREMENT, DECREMENT, RESET,
  DECREMENT_ASYNC, DECREMENT_IF_EVEN, DECREMENT_IF_ODD,
  RESET_ASYNC, RESET_IF_EVEN, RESET_IF_ODD
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
  (dispatch, getState) =>
    getState().counter.value % 2 === 0
      ? dispatch(increment())
      : void 0;

export const incrementIfOdd = () =>
  (dispatch, getState) =>
    Math.abs(getState().counter.value % 2) === 1
      ? dispatch(increment())
      : void 0;

/**
 * @name Observable
 */

export const decrementAsync = () => ({ type: DECREMENT_ASYNC });
export const decrementIfEven = () => ({ type: DECREMENT_IF_EVEN });
export const decrementIfOdd = () => ({ type: DECREMENT_IF_ODD });

/**
 * @name Saga
 */

export const resetAsync = () => ({ type: RESET_ASYNC });
export const resetIfEven = () => ({ type: RESET_IF_EVEN });
export const resetIfOdd = () => ({ type: RESET_IF_ODD });
