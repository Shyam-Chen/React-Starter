import { INITIAL, INCREMENT, DECREMENT } from './constants';

export default (state = INITIAL, action) => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
