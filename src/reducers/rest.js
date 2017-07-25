import {
  SUCCESS, FAILURE,
  REST_SET_DELETE, REST_DELETE_MODAL
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
    id, deleteModalOpen
  } = action;

  switch (type) {
    case SUCCESS:
      return { ...state, dataset: [...data].reverse() };
    case FAILURE:
      console.error(error);
      return { ...state };

    case REST_SET_DELETE:
      state.deleteData = id
      return { ...state };
    case REST_DELETE_MODAL:
      state.deleteModalOpen = deleteModalOpen
      return { ...state };

    default:
      return state;
  }
}
