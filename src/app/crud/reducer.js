import { handleActions } from 'redux-actions';

import { INITIAL, ADD_ITEM, SEARCH_ITEM, EDIT_ITEM, DELETE_ITEM, SET_DATA } from './constants';

export default handleActions({
  [ADD_ITEM](state, { primary, accent }) {
    return {
      ...state,
      dataset: [
        {
          id: state.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          primary,
          accent
        },
        ...state.dataset
      ]
    };
  },
  [SEARCH_ITEM](state, { primary, accent }) {
    return {
      ...state,
      dataset: INITIAL.dataset.filter(item =>
        (item.primary.toLowerCase().indexOf(primary.toLowerCase()) !== -1) &&
        (item.accent.toLowerCase().indexOf(accent.toLowerCase()) !== -1)
      )
    };
  },
  [EDIT_ITEM](state, { id, primary, accent }) {
    return {
      ...state,
      dataset: [...state.dataset.map(item => item.id === id ? { ...item, primary, accent } : item)]
    };
  },
  [DELETE_ITEM](state, { id }) {
    return {
      ...state,
      dataset: [...state.dataset.filter(item => item.id !== id)]
    };
  },
  [SET_DATA](state, { data }) {
    return { ...state, ...data };
  }
}, INITIAL);
