import { MODAL } from '../constants';

const initial = {};

export default (state = initial, action) => {
  const { type, modalOpen } = action;

  switch (type) {
    case MODAL:
      state.modalOpen = modalOpen
      return { ...state }
    default:
      return state;
  }
}
