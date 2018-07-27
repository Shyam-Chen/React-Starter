// @flow

import { handleActions } from 'redux-actions';

import { INITIAL, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, SET_DATA } from './constants';

export default handleActions({
  [ADD_ITEM](state, { payload: { primary, accent } }) {
    const id = state.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;

    return {
      ...state,
      dataset: [...state.dataset, { id, primary, accent }],
    };
  },
  [EDIT_ITEM](state, { payload: { id, primary, accent } }) {
    return {
      ...state,
      dataset: [
        ...state.dataset
          .map(item => (item.id === id ? { ...item, primary, accent } : item)),
      ],
    };
  },
  [DELETE_ITEM](state, { id }) {
    return {
      ...state,
      dataset: [...state.dataset.filter(item => item.id !== id)],
    };
  },
  [SET_DATA](state, { data }) {
    return { ...state, ...data };
  },
}, INITIAL);
