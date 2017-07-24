import { INCREMENT, DECREMENT } from '../constants';

const initial = {
  value: 0
};

export default (state = initial, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
