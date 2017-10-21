import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { fromPromise, concat, of } from 'rxjs/observable';
import { map, mergeMap, switchMap } from 'rxjs/operator';
import axios from 'axios';

import { API_LIST, ADD_ITEM_EPIC, SEARCH_ITEM_EPIC, EDIT_ITEM_EPIC, DELETE_ITEM_EPIC } from './constants';
import { success, searchItemObservable, setData } from './actions';

export const addItemEpic = action$ =>
  action$.ofType(ADD_ITEM_EPIC)
    ::mergeMap(({ text }) =>
      Observable::fromPromise(
        axios.post(API_LIST, { text })
      )
    )
    ::map(() => searchItemObservable());

export const searchItemEpic = action$ =>
  action$.ofType(SEARCH_ITEM_EPIC)
    ::switchMap(({ text }) =>
      concat(
        Observable::fromPromise(
            axios.get(text ? `${API_LIST}?text=${text}` : API_LIST)
          )
          ::map(({ data }) => success(data)),
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
    ::map(() => searchItemObservable());

export const deleteItemEpic = action$ =>
  action$.ofType(DELETE_ITEM_EPIC)
    ::mergeMap(({ id }) =>
      Observable::fromPromise(
        axios.delete(`${API_LIST}/${id}`)
      )
    )
    ::map(() => searchItemObservable());

export default combineEpics(
  addItemEpic,
  searchItemEpic,
  editItemEpic,
  deleteItemEpic
);
