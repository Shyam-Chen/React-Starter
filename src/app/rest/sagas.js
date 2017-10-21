import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { API_LIST, ADD_ITEM_SAGA, SEARCH_ITEM_SAGA, EDIT_ITEM_SAGA, DELETE_ITEM_SAGA } from './constants';
import { success, searchItemSaga, setData } from './actions';

export function *effectAddItemSaga({ text }) {
  yield axios.post(API_LIST, { text });
  yield put(searchItemSaga());
}

export function *watchAddItemSaga() {
  yield takeEvery(ADD_ITEM_SAGA, effectAddItemSaga);
}

export function *effectSearchItemSaga({ text }) {
  const { data } = yield axios.get(text ? `${API_LIST}?text=${text}` : API_LIST);
  yield put(success(data));
  yield put(setData({ loading: false }));
}

export function *watchSearchItemSaga() {
  yield takeEvery(SEARCH_ITEM_SAGA, effectSearchItemSaga);
}

export function *effectEditItemSaga({ id, text }) {
  yield axios.put(`${API_LIST}/${id}`, { text });
  yield put(searchItemSaga());
}

export function *watchEditItemSaga() {
  yield takeEvery(EDIT_ITEM_SAGA, effectEditItemSaga);
}

export function *effectDeleteItemSaga({ id }) {
  yield axios.delete(`${API_LIST}/${id}`);
  yield put(searchItemSaga());
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
