import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_FORGET_PASSWORD, ACTIVATE_ACCOUNT } from 'actions/types';
import { updateErrorLogs, updateActivateAccount, updateAuthLoader } from 'actions';
import { requestForgotPassword, activateUserAccount } from 'api/auth';
import { push } from 'connected-react-router';
import { authPath } from 'constants/router-constants';

export const forgotPassword = function*(action) {
  try {
    const response = yield call(requestForgotPassword(action.email,action.captcha));
    if (response.status === 'success') {
      yield put(push(authPath.login));
    }
  } catch(error) {
    yield call(updateErrorLogs(error));
  }
};

export const activateAccount = function*(action) {
  try {
    yield put(updateAuthLoader(true));
    const response = yield call(activateUserAccount(action.uuid));
    const isProfileChange = window.location.search.includes('profile=true');
    yield put(updateActivateAccount(response.message, isProfileChange, false));
  } catch(error) {
    yield call(updateErrorLogs(error));
  }
};

export default function* authSaga() {
  yield takeEvery(REQUEST_FORGET_PASSWORD, forgotPassword);
  yield takeEvery(ACTIVATE_ACCOUNT, activateAccount);
}