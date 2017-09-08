import { handleActions } from 'redux-actions';

import {
  INITIAL,
  SUCCESS, FAILURE,
  SET_ADD,
  SET_DELETE, DELETE_MODAL,
  SET_EDIT, EDIT_MODAL,
  SET_SEARCH,
  SET_DATA
} from './constants';

export default handleActions({
  [SUCCESS](state, { data }) {
    return { ...state, dataset: [...data].reverse() };
  },
  [FAILURE](state, { error }) {
    throw error;
  },

  [SET_ADD](state, { text }) {
    return { ...state, addData: { ...state.addData, text } };
  },

  [SET_DELETE](state, { id }) {
    return { ...state, deleteData: id };
  },
  [DELETE_MODAL](state, { deleteModalOpen }) {
    return { ...state, deleteModalOpen };
  },

  [SET_EDIT](state, { id, text }) {
    return { ...state, editData: { ...state.editData, id, text } };
  },
  [EDIT_MODAL](state, { editModalOpen }) {
    return { ...state, editModalOpen };
  },

  [SET_SEARCH](state, { text }) {
    return { ...state, searchData: { ...state.searchData, text } };
  },

  [SET_DATA](state, { data }) {
    return { ...state, ...data };
  }
}, INITIAL);
