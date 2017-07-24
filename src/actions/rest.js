import axios from 'axios';

import { SUCCESS, FAILURE, CREATE, READ, UPDATE, DELETE } from '../constants';

const url = 'https://web-go-demo.herokuapp.com/__/list';

export const onCreate = (data) => ({ type: CREATE, data });
export const onRead = (data) => ({ type: READ, data });
export const onUpdate = (data) => ({ type: UPDATE, data });
export const onDelete = (data) => ({ type: DELETE, data });

export const onSuccess = data => ({ type: SUCCESS, data });
export const onFailure = error => ({ type: FAILURE, error });

export const onSearch = (text) =>
  dispatch => {
    let getList;

    text ? getList = axios.get(`${url}?text=${text}`) : getList = axios.get(url)

    getList
      .then(response => dispatch(onSuccess(response.data)))
      .catch(error => dispatch(onFailure(error)));
    };



export const onAdd = (text) =>
  dispatch =>
    axios.post(url, { text })
      .then(response => dispatch(onCreate(response.data)));

export const onSave = (id, text) =>
  dispatch =>
    axios.put(`${url}/${id}`, { text })
      .then(response => dispatch(onUpdate(response.data)));

export const onRemove = (id) =>
  dispatch =>
    axios.delete(`${url}/${id}`)
      .then(response => dispatch(onDelete(response.data)));
