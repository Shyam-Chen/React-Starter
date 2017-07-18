import { ADD_ITEM, GET_LIST, EDIT_ITEM, DELETE_ITEM } from '../constants';

export const addItem = text => ({ type: ADD_ITEM, text });
export const getList = () => ({ type: GET_LIST });
export const editItem = (id, text) => ({ type: EDIT_ITEM, id, text });
export const deleteItem = id => ({ type: DELETE_ITEM, id });
