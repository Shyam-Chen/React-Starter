import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operator';
import { _do } from 'rxjs/operator/do';

import { ADD_ITEM_EPIC } from './constants';
import { success } from './actions';

export const addItemEpic = action$ =>
  action$.ofType(ADD_ITEM_EPIC)
    ::_do(foo => console.log(foo))
    ::map(success);

export default combineEpics(
  addItemEpic
);
