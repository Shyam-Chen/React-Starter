import { INCREMENT, DECREMENT } from '../constants';

const init = {
  counter: 0
};

export default (state = init, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
