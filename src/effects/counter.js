import { filter, map } from 'rxjs/operator';

import { INCREMENT_IF_ODD } from '../constants';
import { onIncrement } from '../actions/counter';

export const onIincrementIfOdd = (action$, store) =>
  action$.ofType(INCREMENT_IF_ODD)
    ::filter(() => store.counter.value % 2 === 1)
    ::map(onIncrement);
