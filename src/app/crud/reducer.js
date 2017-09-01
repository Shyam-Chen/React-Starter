import { handleActions } from 'redux-actions';

import {
  INITIAL,
  ADD_ITEM,
  SEARCH_ITEM, SET_SEARCH,
  EDIT_ITEM, EDIT_MODAL, SET_EDIT,
  DELETE_ITEM, DELETE_MODAL, SET_DELETE,
  SET_DATA
} from './constants';

export default handleActions({
  [ADD_ITEM](state, { primary, accent }) {
    return {
      ...state,
      dataset: [
        {
          id: state.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          primary, accent
        },
        ...state.dataset
      ]
    };
  },
  // [SET_ADD](state, { primary, accent }) {
  //   return { ...state, addData: { ...state.addData, primary, accent } };
  // },

  [SEARCH_ITEM](state, { primary, accent }) {
    const searchResult = [];

    return {
      ...state,
      dataset: INITIAL.dataset.filter(item => {
        const _primary = item.primary.toLowerCase().indexOf(primary.toLowerCase());
        const _accent = item.accent.toLowerCase().indexOf(accent.toLowerCase());

        if(_primary !== -1 && _accent !== -1) {
          return searchResult.push(item);
        }
      })
    };
  },
  [SET_SEARCH](state, { primary, accent }) {
    return { ...state, searchData: { ...state.searchData, primary, accent } };
  },

  [EDIT_ITEM](state, { id, primary, accent }) {
    return {
      ...state,
      dataset: [...state.dataset.map(item => item.id === id ? { ...item, primary, accent } : item)]
    };
  },
  [SET_EDIT](state, { id, primary, accent }) {
    return { ...state, editData: { ...state.editData, id, primary, accent } };
  },
  [EDIT_MODAL](state, { editModalOpen }) {
    return { ...state, editModalOpen };
  },

  [DELETE_ITEM](state, { id }) {
    return { ...state, dataset: [...state.dataset.filter(item => item.id !== id)] };
  },
  [SET_DELETE](state, { id }) {
    return { ...state, deleteData: id };
  },
  [DELETE_MODAL](state, { deleteModalOpen }) {
    return { ...state, deleteModalOpen };
  },

  [SET_DATA](state, { data }) {
    return { ...state, ...data };
  }
}, INITIAL);
