import { createSelector } from 'reselect';

export const nameError = createSelector(
  formControls => formControls,
  ({ name }) => (name === '') || (name.length > 15)
);

export const listOfVariety = createSelector(
  formControls => formControls,
  formControls => formControls.animals.filter(value => value.category === formControls.category)
);
