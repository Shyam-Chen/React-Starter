import { ADD_ITEM, SEARCH_ITEM, EDIT_ITEM, DELETE_ITEM, SET_DATA } from './constants';

export const addItem = (primary, accent) => ({ type: ADD_ITEM, primary, accent });
export const searchItem = text => ({ type: SEARCH_ITEM, text });
export const editItem = item => ({ type: EDIT_ITEM, item });
export const deleteItem = id => ({ type: DELETE_ITEM, id });

export const setData = data => ({ type: SET_DATA, data });
