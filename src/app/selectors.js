import { createSelector } from 'reselect';

import { MEMOIZE } from './constants';

export const NAME = createSelector([MEMOIZE],
  app => app
);

export const error = createSelector([MEMOIZE],
  ({ value }): boolean => value === ''
);
