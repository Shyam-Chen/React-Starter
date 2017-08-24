import {
  INITIAL,
  SUCCESS, FAILURE,
  // SET_ADD,
  // SET_DELETE, DELETE_MODAL,
  // SET_EDIT, EDIT_MODAL,
  // SET_SEARCH
} from './constants';

export default (state = INITIAL, action) => {
  const {
    type,
    data, error,
    // id, text,
    // deleteModalOpen, editModalOpen
  } = action;

  switch (type) {
    case SUCCESS:
      return { ...state, dataset: [...data].reverse() };
    case FAILURE:
      throw error;

    default:
      return state;
  }
};
