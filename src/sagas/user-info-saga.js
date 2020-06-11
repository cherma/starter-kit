import { takeEvery, call } from 'redux-saga/effects';
import { GET_USER_INFO } from 'actions/types.js';
import { fetchUserInfo } from 'api/user-info.js';

export const getUserDetails = function*(actions) {
  try {
    if(!!actions.email && !!actions.password) {
      alert();
    } else {
      yield call(fetchUserInfo);
    }
  } catch (error) {
    console.log('Error')
  }
};

export default function* userInfoSaga() {
  yield takeEvery(GET_USER_INFO, getUserDetails);
}