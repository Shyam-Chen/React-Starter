import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { API_LIST, ADD_ITEM_SAGA, SEARCH_ITEM_SAGA, EDIT_ITEM_SAGA, DELETE_ITEM_SAGA } from './constants';
import { success, failure, setData, searchItemSaga } from './actions';

export function *effectAddItemSaga({ text }) {
  try {
    yield axios.post(API_LIST, { text });
    yield put(searchItemSaga());
  } catch (error) {
    put(failure(error));
  }
}

export function *watchAddItemSaga() {
  yield takeEvery(ADD_ITEM_SAGA, effectAddItemSaga);
}

export function *effectSearchItemSaga({ text }) {
  try {
    const { data } = yield axios.get(API_LIST, { params: { text } });
    yield put(success(data));
    yield put(setData({ loading: false }));
  } catch (error) {
    put(failure(error));
  }
}

export function *watchSearchItemSaga() {
  yield takeEvery(SEARCH_ITEM_SAGA, effectSearchItemSaga);
}

export function *effectEditItemSaga({ id, text }) {
  try {
    yield axios.put(`${API_LIST}/${id}`, { text });
    yield put(searchItemSaga());
  } catch (error) {
    put(failure(error));
  }
}

export function *watchEditItemSaga() {
  yield takeEvery(EDIT_ITEM_SAGA, effectEditItemSaga);
}

export function *effectDeleteItemSaga({ id }) {
  try {
    yield axios.delete(`${API_LIST}/${id}`);
    yield put(searchItemSaga());
  } catch (error) {
    put(failure(error));
  }
}

export function *watchDeleteItemSaga() {
  yield takeEvery(DELETE_ITEM_SAGA, effectDeleteItemSaga);
}

export default function *() {
  yield all([
    watchAddItemSaga(),
    watchSearchItemSaga(),
    watchEditItemSaga(),
    watchDeleteItemSaga()
  ]);
}
