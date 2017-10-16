import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import { RESET, RESET_ASYNC } from './constants';

export function* resetAsync() {
  yield delay(1000);
  yield put({ type: RESET });
}

export function* watchResetAsync() {
  yield takeEvery(RESET_ASYNC, resetAsync);
}

export default function* () {
  yield all([
    watchResetAsync()
  ]);
}
