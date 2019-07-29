import { createSelector } from 'reselect';

export const numSelected = createSelector(
  basic => basic,
  ({ selected }) => selected.length,
);
