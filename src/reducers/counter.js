import { INCREMENT, DECREMENT } from '../constants';

const init = {
  value: 0
};

export default (state = init, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
