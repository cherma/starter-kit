import { fork, all } from 'redux-saga/effects';
import userInfoSaga from './user-info-saga';
import authSaga from './auth-saga';
import markQustionSaga from './mark-questions-saga';

export default function* rootSaga() {
  yield all([
    fork(userInfoSaga),
    fork(authSaga),
    fork(markQustionSaga)
  ]);
}