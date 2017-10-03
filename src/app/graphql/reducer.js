import { handleActions } from 'redux-actions';

import { INITIAL, SUCCESS, FAILURE, SET_DATA } from './constants';

export default handleActions({
  [SUCCESS](state, { data: { list } }) {
    return { ...state, dataset: [...list].reverse() };
  },
  [FAILURE](state, { error }) {
    console.error(error.message);
  },
  [SET_DATA](state, { data }) {
    return { ...state, ...data };
  }
}, INITIAL);
