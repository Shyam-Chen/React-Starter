import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { fromPromise, concat, of } from 'rxjs/observable';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operator';
import { _catch } from 'rxjs/operator/catch';
import axios from 'axios';

import { API_LIST, SEARCH_ITEM_EPIC } from './constants';
import { success, failure, setData } from './actions';

export const searchItemEpic = action$ =>
  action$.ofType(SEARCH_ITEM_EPIC)
    ::debounceTime(500)
    ::distinctUntilChanged()
    ::switchMap(({ text }) =>
      concat(
        Observable
          ::fromPromise(axios.get(API_LIST, { params: { text } }))
          ::map(({ data }) => success(data))
          ::_catch(error => Observable::of(failure(error))),
        of(setData({ loading: false }))
      )
    );

export default combineEpics(
  searchItemEpic
);
