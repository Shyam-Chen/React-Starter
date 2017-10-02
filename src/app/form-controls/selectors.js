import { createSelector } from 'reselect';

export const listOfVariety = createSelector(
  formControls => formControls,
  formControls => formControls.animals.filter(value => value.category === formControls.category)
);
