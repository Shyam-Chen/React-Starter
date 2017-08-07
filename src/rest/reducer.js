import {
  INITIAL,
  SUCCESS, FAILURE,
  SET_ADD,
  SET_DELETE, DELETE_MODAL,
  SET_EDIT, EDIT_MODAL,
  SET_SEARCH
} from './constants';

export default (state = INITIAL, action) => {
  const {
    type,
    data, error,
    id, text,
    deleteModalOpen, editModalOpen
  } = action;

  switch (type) {
    case SUCCESS:
      return { ...state, dataset: [...data].reverse() };
    case FAILURE:
      console.error(error);
      return { ...state };

    case SET_ADD:
      state.addData = { ...state.addData, text };
      return { ...state };

    case SET_DELETE:
      state.deleteData = id;
      return { ...state };
    case DELETE_MODAL:
      state.deleteModalOpen = deleteModalOpen;
      return { ...state };

    case SET_EDIT:
      state.editData = { ...state.editData, id, text };
      return { ...state };
    case EDIT_MODAL:
      state.editModalOpen = editModalOpen;
      return { ...state };

    case SET_SEARCH:
      state.searchData = { ...state.searchData, text };
      return { ...state };

    default:
      return state;
  }
}
