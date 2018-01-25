import axios from 'axios';

import {
  API_LIST, SUCCESS, FAILURE, SET_DATA,
  ADD_ITEM_EPIC, SEARCH_ITEM_EPIC, EDIT_ITEM_EPIC, DELETE_ITEM_EPIC,
  ADD_ITEM_SAGA, SEARCH_ITEM_SAGA, EDIT_ITEM_SAGA, DELETE_ITEM_SAGA
} from './constants';

export const success = data => ({ type: SUCCESS, data });
export const failure = error => ({ type: FAILURE, error });

export const setData = data => ({ type: SET_DATA, data });

/**
 * @name Thunk
 */

// promises
export const addItem = text =>
  dispatch =>
    axios.post(API_LIST, { text })
      .then(() => dispatch(searchItem()))
      .catch(error => dispatch(failure(error)));

export const searchItem = text =>
  dispatch =>
    axios.get(API_LIST, { params: { text } })
      .then(({ data }) => dispatch(success(data)))
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

// async functions
export const _addItem = text =>
  async dispatch => {
    try {
      await axios.post(API_LIST, { text });
      await dispatch(searchItem());
    } catch (error) {
      dispatch(failure(error));
    }
  };

export const _searchItem = text =>
  async dispatch => {
    try {
      const { data } = await axios.get(API_LIST, { params: { text } });
      await dispatch(success(data));
      await dispatch(setData({ loading: false }));
    } catch (error) {
      dispatch(failure(error));
    }
  };

export const _editItem = (id, text) =>
  async dispatch => {
    try {
      await axios.put(`${API_LIST}/${id}`, { text });
      await dispatch(searchItem());
    } catch (error) {
      dispatch(failure(error));
    }
  };

export const _deleteItem = id =>
  async dispatch => {
    try {
      await axios.delete(`${API_LIST}/${id}`);
      await dispatch(searchItem());
    } catch (error) {
      dispatch(failure(error));
    }
  };

/**
 * @name Saga
 */

export const addItemSaga = text => ({ type: ADD_ITEM_SAGA, text });
export const searchItemSaga = text => ({ type: SEARCH_ITEM_SAGA, text });
export const editItemSaga = (id, text) => ({ type: EDIT_ITEM_SAGA, id, text });
export const deleteItemSaga = id => ({ type: DELETE_ITEM_SAGA, id });

/**
 * @name Observable
 */

export const addItemObservable = text => ({ type: ADD_ITEM_EPIC, text });
export const searchItemObservable = text => ({ type: SEARCH_ITEM_EPIC, text });
export const editItemObservable = (id, text) => ({ type: EDIT_ITEM_EPIC, id, text });
export const deleteItemObservable = id => ({ type: DELETE_ITEM_EPIC, id });
