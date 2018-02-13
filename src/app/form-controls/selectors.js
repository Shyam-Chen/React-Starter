import { createSelector } from 'reselect';

import { MEMOIZE } from './constants';

export const nameError = createSelector(
  [MEMOIZE],
  ({ name }): boolean => (name === '') || (name.length > 15)
);

export const listOfVariety = createSelector(
  [MEMOIZE],
  ({ animals, category }): any[] => animals.filter(value => value.category === category)
);
