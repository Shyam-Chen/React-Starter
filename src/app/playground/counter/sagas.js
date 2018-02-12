import { delay } from 'redux-saga';
import { select, put, takeLatest, all } from 'redux-saga/effects';

import { RESET_ASYNC, RESET_IF_EVEN, RESET_IF_ODD } from './constants';
import { reset } from './actions';

export function *resetAsync() {
  yield delay(1000);
  yield put(reset());
}

export function *watchResetAsync() {
  yield takeLatest(RESET_ASYNC, resetAsync);
}

export function *resetIfEven() {
  const { value } = yield select(({ counter }) => counter);
  if (value % 2 === 0) yield put(reset());
}

export function *watchResetIfEven() {
  yield takeLatest(RESET_IF_EVEN, resetIfEven);
}

export function *resetIfOdd() {
  const { value } = yield select(({ counter }) => counter);
  if (Math.abs(value % 2) === 1) yield put(reset());
}

export function *watchResetIfOdd() {
  yield takeLatest(RESET_IF_ODD, resetIfOdd);
}

export default function *() {
  yield all([
    watchResetAsync(),
    watchResetIfEven(),
    watchResetIfOdd()
  ]);
}
