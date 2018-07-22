// @flow

import { handleActions } from 'redux-actions';

import { INITIAL, SET_DATA } from './constants';

export default handleActions({
  [SET_DATA](state, { data }) {
    return { ...state, ...data };
  },
}, INITIAL);
