import { handleActions } from 'redux-actions';

import { INITIAL, SUCCESS, FAILURE, SET_DATA } from './constants';

export default handleActions({
  [SUCCESS](state, { data }) {
    return { ...state, dataset: [...data].reverse() };
  },
  [FAILURE](state, { error }) {
    return { ...state, error };
  },
  [SET_DATA](state, { data }) {
    return { ...state, ...data };
  }
}, INITIAL);
