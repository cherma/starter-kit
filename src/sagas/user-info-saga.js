import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USER_INFO, DO_LOGIN, SIGN_OUT } from 'actions/types.js';
import { fetchUserInfo, fetchUserInfoLogin, signoutAccount } from 'api/user-info.js';
import { flushAll, updateUserInfo, updateErrorLogs, setButtonState } from 'actions';
import { authPath } from 'constants/router-constants';
import { push } from 'connected-react-router';

export const getUserDetails = function*(action) {
  try {
    const userInfo = yield call(fetchUserInfo);
    yield put(updateUserInfo({ ...userInfo.data, isAppLoading: false, isLoggedIn: true}));
  } catch (error) {
    yield put(updateUserInfo({isAppLoading: false, isLoggedIn: false, isAssessmentRunning: false}));
    yield put(push(authPath.login));
  }
};

export const loginAccount = function*(action) {
  try {
    yield put(setButtonState(true));
    yield call(fetchUserInfoLogin, action.email, action.password);
    yield put(setButtonState(false));
    yield put(push('/user/mark-questions'));
    yield put(updateUserInfo({isAppLoading: false, isLoggedIn: true}));
  } catch (error) {
    yield put(setButtonState(false));
  }
};

export const signoutUser = function*(action) {
  try {
    yield call(signoutAccount);
    yield put(flushAll());
    yield put(push(authPath.login));
  } catch(error) {
    yield put(updateErrorLogs(error));
  }
};

export default function* userInfoSaga() {
  yield takeEvery(GET_USER_INFO, getUserDetails);
  yield takeEvery(DO_LOGIN, loginAccount);
  yield takeEvery(SIGN_OUT, signoutUser);
}