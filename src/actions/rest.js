import { ADD_ITEM, GET_LIST, EDIT_ITEM, DELETE_ITEM } from '../constants';

export const onAddItem = (foo, bar) => ({ type: ADD_ITEM, foo, bar });
export const onGetList = () => ({ type: GET_LIST });
export const onEditItem = (id, text) => ({ type: EDIT_ITEM, id, text });
export const onDeleteItem = id => ({ type: DELETE_ITEM, id });
