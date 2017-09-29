import { createSelector } from 'reselect';

export const evenOrOdd = createSelector(
  counter => counter,
  counter => counter.value % 2 === 0 ? 'even' : 'odd'
);
