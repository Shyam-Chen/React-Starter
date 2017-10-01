import { INCREMENT, DECREMENT, DECREMENT_ASYNC, DECREMENT_IF_EVEN } from './constants';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const incrementAsync = () =>
  dispatch =>
    setTimeout(() => dispatch(increment()), 1000);

export const incrementIfOdd = () =>
  (dispatch, getState) => {
    const { counter } = getState();

    if (Math.abs(counter.value % 2) === 1) {
      dispatch(increment());
    }
  };

export const decrementAsync = () => ({ type: DECREMENT_ASYNC });
export const decrementIfEven = () => ({ type: DECREMENT_IF_EVEN });
