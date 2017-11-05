import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { fromPromise, concat, of } from 'rxjs/observable';
import { map, mergeMap, switchMap } from 'rxjs/operator';
import { _catch } from 'rxjs/operator/catch';
import axios from 'axios';

import { API_LIST, ADD_ITEM_EPIC, SEARCH_ITEM_EPIC, EDIT_ITEM_EPIC, DELETE_ITEM_EPIC } from './constants';
import { success, failure, setData, searchItemObservable } from './actions';

export const addItemEpic = action$ =>
  action$.ofType(ADD_ITEM_EPIC)
    ::mergeMap(({ text }) =>
      Observable::fromPromise(
        axios.post(API_LIST, { text })
      )
    )
    ::map(() => searchItemObservable())
    ::_catch(error => Observable::of(failure(error)));

export const searchItemEpic = action$ =>
  action$.ofType(SEARCH_ITEM_EPIC)
    ::switchMap(({ text }) =>
      concat(
        Observable::fromPromise(
            axios.get(text ? `${API_LIST}?text=${text}` : API_LIST)
          )
          ::map(({ data }) => success(data))
          ::_catch(error => Observable::of(failure(error))),
        of(setData({ loading: false }))
      )
    );

export const editItemEpic = action$ =>
  action$.ofType(EDIT_ITEM_EPIC)
    ::mergeMap(({ id, text }) =>
      Observable::fromPromise(
        axios.put(`${API_LIST}/${id}`, { text })
      )
    )
    ::map(() => searchItemObservable())
    ::_catch(error => Observable::of(failure(error)));

export const deleteItemEpic = action$ =>
  action$.ofType(DELETE_ITEM_EPIC)
    ::mergeMap(({ id }) =>
      Observable::fromPromise(
        axios.delete(`${API_LIST}/${id}`)
      )
    )
    ::map(() => searchItemObservable())
    ::_catch(error => Observable::of(failure(error)));

export default combineEpics(
  addItemEpic,
  searchItemEpic,
  editItemEpic,
  deleteItemEpic
);
