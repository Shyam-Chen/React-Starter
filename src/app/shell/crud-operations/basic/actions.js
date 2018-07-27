import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, SET_DATA } from './constants';

export const addItem = payload => ({ type: ADD_ITEM, payload });
export const editItem = payload => ({ type: EDIT_ITEM, payload });
export const deleteItem = id => ({ type: DELETE_ITEM, id });

export const setData = data => ({ type: SET_DATA, data });
