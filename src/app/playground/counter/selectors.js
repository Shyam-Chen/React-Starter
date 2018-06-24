// @flow

import { createSelector } from 'reselect';

import { ICounter } from './types';

export const evenOrOdd = createSelector(
  (counter: ICounter): ICounter => counter,
  ({ value }: ICounter): string => (value % 2 === 0 ? 'even' : 'odd'),
);
