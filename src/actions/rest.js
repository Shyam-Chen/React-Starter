import axios from 'axios';

import {
  SUCCESS, FAILURE,
  REST_SET_DELETE, REST_DELETE_MODAL
} from '../constants';

const url = 'https://web-go-demo.herokuapp.com/__/list';

export const onSuccess = data => ({ type: SUCCESS, data });
export const onFailure = error => ({ type: FAILURE, error });

export const onSearch = (text) =>
  dispatch => {
    let getList;

    text ? getList = axios.get(`${url}?text=${text}`) : getList = axios.get(url);

    getList
      .then(response => dispatch(onSuccess(response.data)))
      .catch(error => dispatch(onFailure(error)));
    };

export const onAdd = (text) =>
  dispatch =>
    axios.post(url, { text })
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onSave = (id, text) =>
  dispatch =>
    axios.put(`${url}/${id}`, { text })
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onRemove = (id) =>
  dispatch =>
    axios.delete(`${url}/${id}`)
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onSetDelete = (id) => ({ type: REST_SET_DELETE, id });
export const onDeleteModal = (deleteModalOpen) => ({ type: REST_DELETE_MODAL, deleteModalOpen });
