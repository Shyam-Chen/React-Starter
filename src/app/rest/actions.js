import axios from 'axios';

import { API_LIST, SUCCESS, FAILURE, SET_DATA } from './constants';

export const success = data => ({ type: SUCCESS, data });
export const failure = error => ({ type: FAILURE, error });

export const addItem = text =>
  dispatch =>
    axios.post(API_LIST, { text })
      .then(() => dispatch(searchItem()))
      .catch(error => dispatch(failure(error)));

export const searchItem = text =>
  dispatch =>
    axios.get(text ? `${API_LIST}?text=${text}` : API_LIST)
      .then(response => dispatch(success(response.data)))
      .then(() => dispatch(setData({ loading: false })))
      .catch(error => dispatch(failure(error)));

export const editItem = (id, text) =>
  dispatch =>
    axios.put(`${API_LIST}/${id}`, { text })
      .then(() => dispatch(searchItem()))
      .catch(error => dispatch(failure(error)));

export const deleteItem = id =>
  dispatch =>
    axios.delete(`${API_LIST}/${id}`)
      .then(() => dispatch(searchItem()))
      .catch(error => dispatch(failure(error)));

export const setData = data => ({ type: SET_DATA, data });
