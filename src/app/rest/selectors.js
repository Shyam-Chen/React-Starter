import { createSelector } from 'reselect';

import { MEMOIZE } from './constants';

export const total = createSelector([MEMOIZE],
  rest => rest.dataset.length
);
