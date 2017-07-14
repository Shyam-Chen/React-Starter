import { Map } from 'immutable';
import { INCREMENT, DECREMENT, RESET } from './actions';

export const counterReducer = (state = Map({ counter: 0 }), action) => {
  switch (action.type) {
    case INCREMENT:
      return state.update('counter', value => value + 1);
    case DECREMENT:
      return state.update('counter', value => value - 1);
    case RESET:
      return state.update('counter', () => 0);
    default:
      return state;
  }
};

// --

// export const INITIAL_COUNTER_STATE = {
//   counter: 0
// };
//
// export const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
//   const { type, payload } = action;
//
//   switch (type) {
//     case INCREMENT:
//       return { ...state, counter: state.counter + 1 };
//       // return Object.assign({}, state, { counter: state.counter + payload.value });
//     case DECREMENT:
//       return { ...state, counter: state.counter - 1 };
//       // return Object.assign({}, state, { counter: state.counter - payload.value });
//     case RESET:
//       return INITIAL_COUNTER_STATE;
//       // return Object.assign({}, state, { counter: 0 });
//     default:
//       return state;
//   }
// };
