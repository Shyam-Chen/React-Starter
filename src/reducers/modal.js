import { OPEN_MODAL, CLOSE_MODAL } from '../constants';

const init = {
  modalOpen: false
};

export default (state = init, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalOpen: true };
    case CLOSE_MODAL:
      return { ...state, modalOpen: false };
    default:
      return state;
  }
}
