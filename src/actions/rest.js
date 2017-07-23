import axios from 'axios';

import { CREATE, READ, UPDATE, DELETE } from '../constants';

const url = 'https://web-go-demo.herokuapp.com/__/list';

export const onCreate = (data) => ({ type: CREATE, data });
export const onRead = (data) => ({ type: READ, data });
export const onUpdate = (data) => ({ type: UPDATE, data });
export const onDelete = (data) => ({ type: DELETE, data });

export const onSearch = () =>
  dispatch =>
    axios.get(url)
      .then(response => dispatch(onRead(response.data)));

// axios.get(`${url}?text=${text}`)

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
