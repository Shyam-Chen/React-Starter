import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_ITEM } from '../constants';

export const onAddItem = (foo, bar) => ({ type: ADD_ITEM, foo, bar });
export const onDeleteItem = id => ({ type: DELETE_ITEM, id });
export const onEditItem = (id, foo, bar) => ({ type: EDIT_ITEM, id, foo, bar });
export const onSearchItem = (foo, bar) => ({ type: SEARCH_ITEM, foo, bar });
