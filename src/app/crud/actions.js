import { ADD_ITEM, SEARCH_ITEM, EDIT_ITEM, DELETE_ITEM, SET_DATA } from './constants';

export const addItem = (primary, accent) => ({ type: ADD_ITEM, primary, accent });
export const searchItem = (primary, accent) => ({ type: SEARCH_ITEM, primary, accent });
export const deleteItem = id => ({ type: DELETE_ITEM, id });
export const editItem = (id, primary, accent) => ({ type: EDIT_ITEM, id, primary, accent });
export const setData = data => ({ type: SET_DATA, data });
