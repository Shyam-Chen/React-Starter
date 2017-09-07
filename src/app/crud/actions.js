import { ADD_ITEM, SEARCH_ITEM, EDIT_ITEM, DELETE_ITEM, SET_DATA } from './constants';

export const onAddItem = (primary, accent) => ({ type: ADD_ITEM, primary, accent });
export const onSearchItem = (primary, accent) => ({ type: SEARCH_ITEM, primary, accent });
export const onDeleteItem = id => ({ type: DELETE_ITEM, id });
export const onEditItem = (id, primary, accent) => ({ type: EDIT_ITEM, id, primary, accent });
export const onSetData = data => ({ type: SET_DATA, data });
