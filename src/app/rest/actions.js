import axios from 'axios';

import {
  API_LIST, SUCCESS, FAILURE, SET_DATA,
  ADD_ITEM_EPIC, SEARCH_ITEM_EPIC, EDIT_ITEM_EPIC, DELETE_ITEM_EPIC,
  ADD_ITEM_SAGA, SEARCH_ITEM_SAGA, EDIT_ITEM_SAGA, DELETE_ITEM_SAGA
} from './constants';

export const success = data => ({ type: SUCCESS, data });
export const failure = error => ({ type: FAILURE, error });

/**
 * @name Thunk
 */

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

/**
 * @name Observable
 */

export const addItemObservable = text => ({ type: ADD_ITEM_EPIC, text });
export const searchItemObservable = text => ({ type: SEARCH_ITEM_EPIC, text });
export const editItemObservable = () => ({ type: EDIT_ITEM_EPIC });
export const deleteItemObservable = () => ({ type: DELETE_ITEM_EPIC });

/**
 * @name Saga
 */

export const addItemSaga = text => ({ type: ADD_ITEM_SAGA, text });
export const searchItemSaga = text => ({ type: SEARCH_ITEM_SAGA, text });
export const editItemSaga = () => ({ type: EDIT_ITEM_SAGA });
export const deleteItemSaga = () => ({ type: DELETE_ITEM_SAGA });

/**
 * @name setting
 * @param {any} data - set data
 * @return {object} - action creator
 */
export const setData = data => ({ type: SET_DATA, data });
