import { combineReducers } from 'redux';

import { templateDriven } from './template-driven';
import { reactive } from './reactive';

export { default as FormControls } from './FormControls';

export const formControls = combineReducers({
  templateDriven,
  reactive,
});
