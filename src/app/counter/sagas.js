import { delay } from 'redux-saga';
import { select, put, takeEvery, all } from 'redux-saga/effects';

import { RESET, RESET_ASYNC, RESET_IF_ODD, RESET_IF_EVEN } from './constants';

export function *resetAsync() {
  yield delay(1000);
  yield put({ type: RESET });
}

export function *watchResetAsync() {
  yield takeEvery(RESET_ASYNC, resetAsync);
}

export function *resetIfOdd() {
  const { value } = yield select(({ counter }) => counter);

  if (Math.abs(value % 2) === 1) {
    yield put({ type: RESET });
  }
}

export function *watchResetIfOdd() {
  yield takeEvery(RESET_IF_ODD, resetIfOdd);
}

export function *resetIfEven() {
  const { value } = yield select(({ counter }) => counter);

  if (value % 2 === 0) {
    yield put({ type: RESET });
  }
}

export function *watchResetIfEven() {
  yield takeEvery(RESET_IF_EVEN, resetIfEven);
}

export default function *() {
  yield all([
    watchResetAsync(),
    watchResetIfOdd(),
    watchResetIfEven()
  ]);
}
