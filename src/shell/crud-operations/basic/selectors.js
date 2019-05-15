// @flow

import { createSelector } from 'reselect';

export const numSelected = createSelector(
  basic => basic,
  ({ selected }): number => selected.length,
);
