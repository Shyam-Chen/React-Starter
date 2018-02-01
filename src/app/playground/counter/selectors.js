// @flow

import { createSelector } from 'reselect';

import { MEMOIZE, ICounter } from './constants';

export const evenOrOdd = createSelector(
  [MEMOIZE],
  ({ value }: ICounter): string => value % 2 === 0 ? 'even' : 'odd'
);
