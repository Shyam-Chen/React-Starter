import {
  SUCCESS, FAILURE,
  REST_SET_ADD,
  REST_SET_DELETE, REST_DELETE_MODAL,
  REST_SET_EDIT, REST_EDIT_MODAL,
  REST_SET_SEARCH
} from '../constants';

const initial = {
  dataset: [],
  addData: { text: '' },
  editData: {},
  deleteData: 0,
  searchData: { text: '' },
  deleteModalOpen: false,
  editModalOpen: false
};

export default (state = initial, action) => {
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

    case REST_SET_ADD:
      state.addData = { ...state.addData, text };
      return { ...state };

    case REST_SET_DELETE:
      state.deleteData = id;
      return { ...state };
    case REST_DELETE_MODAL:
      state.deleteModalOpen = deleteModalOpen;
      return { ...state };

    case REST_SET_EDIT:
      state.editData = { ...state.editData, id, text };
      return { ...state };
    case REST_EDIT_MODAL:
      state.editModalOpen = editModalOpen;
      return { ...state };

    case REST_SET_SEARCH:
      state.searchData = { ...state.searchData, text };
      return { ...state };

    default:
      return state;
  }
}
