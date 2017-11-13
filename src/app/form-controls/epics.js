import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operator';

import { INPUT_DATA } from './constants';
import { setData } from './actions';

export const nicknameEpic = action$ =>
  action$.ofType(INPUT_DATA)
    // TODO: ...
    ::map(({ data: { creditCard } }) => setData({ creditCard }));

export default combineEpics(
  nicknameEpic
);
