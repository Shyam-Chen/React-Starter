import { combineEpics } from 'redux-observable';
import { from, concat, of } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import axios from 'axios';

import { API_LIST, ADD_ITEM_EPIC, SEARCH_ITEM_EPIC, EDIT_ITEM_EPIC, DELETE_ITEM_EPIC } from './constants';
import { success, failure, setData, searchItemObservable } from './actions';

export const addItemEpic = action$ =>
  action$.ofType(ADD_ITEM_EPIC)
    .pipe(
      mergeMap(({ text }) => from(axios.post(API_LIST, { text }))),
      map(() => searchItemObservable()),
      catchError(error => of(failure(error))),
    );

export const searchItemEpic = action$ =>
  action$.ofType(SEARCH_ITEM_EPIC)
    .pipe(
      switchMap(({ text }) =>
        concat(
          from(axios.get(API_LIST, { params: { text } }))
            .pipe(
              map(({ data }) => success(data)),
              catchError(error => of(failure(error))),
            ),
          of(setData({ loading: false })),
        ),
      ),
    );

export const editItemEpic = action$ =>
  action$.ofType(EDIT_ITEM_EPIC)
    .pipe(
      mergeMap(({ id, text }) => from(axios.put(`${API_LIST}/${id}`, { text }))),
      map(() => searchItemObservable()),
      catchError(error => of(failure(error))),
    );

export const deleteItemEpic = action$ =>
  action$.ofType(DELETE_ITEM_EPIC)
    .pipe(
      mergeMap(({ id }) => from(axios.delete(`${API_LIST}/${id}`))),
      map(() => searchItemObservable()),
      catchError(error => of(failure(error))),
    );

export default combineEpics(
  addItemEpic,
  searchItemEpic,
  editItemEpic,
  deleteItemEpic,
);
