// @flow

import { createSelector } from 'reselect';

import { State } from './constants';

export const evenOrOdd = createSelector(
  (counter: State): State => counter,
  (counter: State): string => counter.value % 2 === 0 ? 'even' : 'odd'
);
