import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { fromPromise, concat, of } from 'rxjs/observable';
import { map, switchMap } from 'rxjs/operator';
import axios from 'axios';

import { API_LIST, ADD_ITEM_EPIC, SEARCH_ITEM_EPIC } from './constants';
import { success, setData } from './actions';

export const addItemEpic = action$ =>
  action$.ofType(ADD_ITEM_EPIC)
    ::map(success);

export const searchItemEpic = action$ =>
  action$.ofType(SEARCH_ITEM_EPIC)
    ::switchMap(({ text }) =>
      concat(
        Observable::fromPromise(axios.get(text ? `${API_LIST}?text=${text}` : API_LIST))
          ::map(({ data }) => success(data)),
        of(setData({ loading: false }))
      )
    );


export default combineEpics(
  addItemEpic,
  searchItemEpic
);
