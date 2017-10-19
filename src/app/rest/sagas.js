import { select, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { API_LIST, SEARCH_ITEM_SAGA } from './constants';
import { success, setData } from './actions';

export function *addItemSaga() {
  yield select(({ rest }) => rest);
}

export function *searchItemSaga({ text }) {
  const { data } = yield axios.get(text ? `${API_LIST}?text=${text}` : API_LIST);
  yield put(success(data));
  yield put(setData({ loading: false }));
}

export function *watchSearchItemSaga() {
  yield takeEvery(SEARCH_ITEM_SAGA, searchItemSaga);
}

export default function *() {
  yield all([
    watchSearchItemSaga()
  ]);
}
