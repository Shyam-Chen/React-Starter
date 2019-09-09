import { handleActions } from 'redux-actions';

import assignDeep from '~/shared/assign-deep';

import { INITIAL, SET_DATA } from './constants';

export default handleActions({
  [SET_DATA](state, { data }) {
    return { ...assignDeep(state, data) };
  },
}, INITIAL);
