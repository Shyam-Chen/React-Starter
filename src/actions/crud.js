import {
  ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SEARCH_ITEM,
  DELETE_MODAL, SET_DELETE,
  EDIT_MODAL, SET_EDIT,
} from '../constants';

export const onAddItem = (primary, accent) => ({ type: ADD_ITEM, primary, accent });
export const onDeleteItem = id => ({ type: DELETE_ITEM, id });
export const onEditItem = (id, primary, accent) => ({ type: EDIT_ITEM, id, primary, accent });
export const onSearchItem = (primary, accent) => ({ type: SEARCH_ITEM, primary, accent });

export const onDeleteModal = (modalOpen) => ({ type: DELETE_MODAL, modalOpen });
export const onSetDelete = (id) => ({ type: SET_DELETE, id });

export const onEditModal = (editModalOpen) => ({ type: EDIT_MODAL, editModalOpen });
export const onSetEdit = (id, primary, accent) => ({ type: SET_EDIT, id, primary, accent });
