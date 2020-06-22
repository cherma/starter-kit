import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_FORGET_PASSWORD, ACTIVATE_ACCOUNT,VALIDATE_RESET_PASSWORD_ID, RESET_PASSWORD } from 'actions/types';
import { updateErrorLogs, updateActivateAccount, updateAuthLoader } from 'actions';
import { requestForgotPassword, activateUserAccount, validateResetPassword, requestResetPassword } from 'api/auth';
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

export const validateResetId = function*(action) {
  try{
    const response = yield call(validateResetPassword(action.uuid));
    if(response !== 'success') {
      yield put(push(authPath.login));
    }
  } catch(error) {
    yield call(updateErrorLogs(error));
  }
};

export const resetPassword = function*(action) {
  try {
    yield call(requestForgotPassword(action.uuid, action.password));
  } catch (error) {
    yield call(updateErrorLogs(error));
  }

};
export default function* authSaga() {
  yield takeEvery(REQUEST_FORGET_PASSWORD, forgotPassword);
  yield takeEvery(ACTIVATE_ACCOUNT, activateAccount);
  yield takeEvery(VALIDATE_RESET_PASSWORD_ID, validateResetId);
  yield takeEvery(RESET_PASSWORD, resetPassword);
}