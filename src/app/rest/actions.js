import axios from 'axios';

import { API_LIST, SUCCESS, FAILURE, SET_DATA } from './constants';

export const onSuccess = data => ({ type: SUCCESS, data });
export const onFailure = error => ({ type: FAILURE, error });

export const onAdd = text =>
  dispatch =>
    axios.post(API_LIST, { text })
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onSearch = text =>
  dispatch =>
    axios.get(text ? `${API_LIST}?text=${text}` : API_LIST)
      .then(response => dispatch(onSuccess(response.data)))
      .then(() => dispatch(onSetData({ loading: false })))
      .catch(error => dispatch(onFailure(error)));

export const onSave = (id, text) =>
  dispatch =>
    axios.put(`${API_LIST}/${id}`, { text })
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onRemove = id =>
  dispatch =>
    axios.delete(`${API_LIST}/${id}`)
      .then(() => dispatch(onSearch()))
      .catch(error => dispatch(onFailure(error)));

export const onSetData = data => ({ type: SET_DATA, data });
