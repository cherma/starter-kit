import { fork, all } from 'redux-saga/effects';
import userInfoSaga from './user-info-saga';

export default function* rootSaga() {
  yield all([
    fork(userInfoSaga)
  ]);
}