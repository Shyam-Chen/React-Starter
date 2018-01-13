import { createSelector } from 'reselect';

export const total = createSelector(
  rest => rest,
  rest => rest.dataset.length
);
