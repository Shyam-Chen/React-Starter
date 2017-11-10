import { createSelector } from 'reselect';

export const nameError = createSelector(
  formControls => formControls,
  ({ name }): boolean => (name === '') || (name.length > 15)
);

export const listOfVariety = createSelector(
  formControls => formControls,
  ({ animals, category }): any[] =>
    animals.filter(value => value.category === category)
);
