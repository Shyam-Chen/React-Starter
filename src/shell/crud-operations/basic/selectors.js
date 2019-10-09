import { createSelector } from 'reselect';

export const numSelected = createSelector(
  state => state.crudOperations.basic,
  ({ selected }) => selected.length,
);
