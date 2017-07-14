import { filter, map } from 'rxjs/operator';

import { INCREMENT_IF_ODD, DECREMENT_IF_EVEN, increment, decrement } from './actions';

export const incrementIfOddEpic = (action$, store) =>
  action$.ofType(INCREMENT_IF_ODD)
    ::filter(() => store.getState().counterReducer.get('counter') % 2 === 1)
    ::map(increment);

export const decrementIfEvenEpic = (action$, store) =>
  action$.ofType(DECREMENT_IF_EVEN)
    ::filter(() => store.getState().counterReducer.get('counter') % 2 === 0)
    ::map(decrement);
