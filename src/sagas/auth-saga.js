import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_FORGET_PASSWORD } from 'actions/types';
import { updateErrorLogs } from 'actions';
import { requestForgotPassword } from 'api/auth';
import { push } from 'connected-react-router';
import { authPath } from 'constants/router-constants';

export const forgotPassword = function*(action) {
  console.log('saga')
  try {
    const response = yield call(requestForgotPassword(action.email,action.captcha));
    console.log(response.status)
    if (response.status === "success") {
      console.log('in');
      yield put(push(authPath.login));
    }
  } catch(error) {
    console.log(error);
    yield call(updateErrorLogs(error));
  }
};

export default function* authSaga() {
  yield takeEvery(REQUEST_FORGET_PASSWORD, forgotPassword);
}