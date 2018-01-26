import { SUCCESS, FAILURE, SEARCH_ITEM_EPIC, SET_DATA } from './constants';

export const success = data => ({ type: SUCCESS, data });
export const failure = error => ({ type: FAILURE, error });

export const searchItemObservable = text => ({ type: SEARCH_ITEM_EPIC, text });

export const setData = data => ({ type: SET_DATA, data });
