import axios from 'axios';

import {
  API_LIST,
  SUCCESS, FAILURE,
  SET_ADD,
  SET_DELETE, DELETE_MODAL,
  SET_EDIT, EDIT_MODAL,
  SET_SEARCH,
  SET_DATA
} from './constants';

export const onSuccess = data => ({ type: SUCCESS, data });
export const onFailure = error => ({ type: FAILURE, error });

export const onAdd = text =>
  dispatch =>
    axios.post(API_LIST, { text })
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onSetAdd = text => ({ type: SET_ADD, text });

export const onRemove = id =>
  dispatch =>
    axios.delete(`${API_LIST}/${id}`)
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onSetDelete = id => ({ type: SET_DELETE, id });
export const onDeleteModal = deleteModalOpen => ({ type: DELETE_MODAL, deleteModalOpen });

export const onSave = (id, text) =>
  dispatch =>
    axios.put(`${API_LIST}/${id}`, { text })
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onSetEdit = (id, text) => ({ type: SET_EDIT, id, text });
export const onEditModal = editModalOpen => ({ type: EDIT_MODAL, editModalOpen });

export const onSearch = text =>
  dispatch =>
    axios.get(text ? `${API_LIST}?text=${text}` : API_LIST)
      .then(response => dispatch(onSuccess(response.data)))
      .catch(error => dispatch(onFailure(error)));

export const onSetSearch = text => ({ type: SET_SEARCH, text });


export const onSetData = data => ({ type: SET_DATA, data });
