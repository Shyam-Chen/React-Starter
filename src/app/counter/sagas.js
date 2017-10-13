import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { INCREMENT, INCREMENT_ASYNC } from './constants';

export function* incrementAsync2() {
  yield delay(1000);
  yield put({ type: INCREMENT });
}

export default function* () {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync2);
}
