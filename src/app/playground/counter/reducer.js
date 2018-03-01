import { handleActions } from 'redux-actions';

import { INITIAL, INCREMENT, DECREMENT, RESET } from './constants';

export default handleActions({
  [INCREMENT](state) {
    return { ...state, value: state.value + 1 };
  },
  [DECREMENT](state) {
    return { ...state, value: state.value - 1 };
  },
  [RESET]() {
    return INITIAL;
  },
}, INITIAL);
