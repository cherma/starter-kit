import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USER_INFO, DO_LOGIN } from 'actions/types.js';
import { fetchUserInfo, fetchUserInfoLogin } from 'api/user-info.js';
import { flushAll, updateUserInfo } from 'actions';
import { push } from 'connected-react-router';

export const getUserDetails = function*(action) {
  try {
    const userInfo = yield call(fetchUserInfo);
    yield put(updateUserInfo({ ...userInfo.data, isAppLoading: false, isLoggedIn: true}));
  } catch (error) {
    yield put(updateUserInfo({isAppLoading: false, isLoggedIn: false, isAssessmentRunning: false}));
    yield call(flushAll);
  }
};

export const loginAccount = function*(action) {
  try {
    yield call(fetchUserInfoLogin(action.email, action.password));
    yield put(push('/user/mark-questions'));
    yield put(updateUserInfo({isAppLoading: false, isLoggedIn: true}));
    //alert();
  } catch (error) {
    yield put(updateUserInfo({isLoading: false, isLoggedIn: false}));
    yield call(flushAll);
  }
};

export default function* userInfoSaga() {
  yield takeEvery(GET_USER_INFO, getUserDetails);
  yield takeEvery(DO_LOGIN, loginAccount);
}