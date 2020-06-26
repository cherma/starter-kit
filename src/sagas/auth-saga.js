import { takeEvery, call, put } from 'redux-saga/effects';
import { CREATE_ACCOUNT, REQUEST_FORGET_PASSWORD, ACTIVATE_ACCOUNT,VALIDATE_RESET_PASSWORD_ID, RESET_PASSWORD, VERIFY_PHONE, VERIFY_EMAIL } from 'actions/types';
import { updateErrorLogs, updateActivateAccount, updateAuthLoader, addNotification,
  updateSignupResponse, setButtonState } from 'actions';
import { requestForgotPassword, activateUserAccount, validateResetPassword,
  requestResetPassword, checkExistingPhone, checkExistingEmail, registerUser } from 'api/auth';
import { push } from 'connected-react-router';
import { authPath } from 'constants/router-constants';
import L from 'utils/localization';

export const createAccount = function*(action) {
  const option = { message: '', type: 'danger'};
  try{
    yield put(setButtonState(true));
    const response = yield call(registerUser, action.data);
    yield put(setButtonState(false));
    if(response.data.status === 'success') {
      option.message = L.t('Auth.signup.successMsg');
      yield put(push(authPath.login));
    } else if(response.data.status === 'failure'){
      const emailResponse = yield call(checkExistingEmail, action.data.email);
      const phoneResponse = yield call(checkExistingPhone, action.data.number);

      if(emailResponse.data.isRegistered) {
        option.message = emailResponse.data.isActivated ? L.t('Auth.signup.errors.existingEmail')
          : L.t('Auth.signup.errors.notActivatedError');
      } else if(phoneResponse.data.isRegistered) {
        option.message = phoneResponse.data.isActivated ? L.t('Auth.signup.errors.phoneExist')
          : L.t('Auth.signup.errors.notActivatedError');
      } else {
        option.message = L.t('Auth.signup.errors.tryAgain');
      }
    } else {
      option.message = L.t('Auth.signup.errors.tryAgain');
    }
    yield put(addNotification(option));

  } catch(error) {
    yield put(setButtonState(false));
    option.message = L.t('Auth.signup.errors.tryAgain');
    yield put(addNotification(option));
    yield put(updateErrorLogs(error));
  }
};

export const forgotPassword = function*(action) {
  try {
    yield put(setButtonState(true));
    const response = yield call(requestForgotPassword,action.email,action.captcha);
    const option = {
      message: L.t('Auth.forgetPassword.failure'),
      type: 'danger',
    };
    if(response.data.status === 'success') {
      option.message = L.t('Auth.forgetPassword.success');
      option.type = 'success';
    }
    yield put(push(authPath.login));
    yield put(setButtonState(false));
    yield put(addNotification(option));
  } catch(error) {
    yield put(setButtonState(false));
    yield put(updateErrorLogs(error));
  }
};

export const activateAccount = function*(action) {
  try {
    yield put(updateAuthLoader(true));
    const response = yield call(activateUserAccount,action.uuid);
    const isProfileChange = window.location.search.includes('profile=true');
    yield put(updateActivateAccount(response.message, isProfileChange, false));
  } catch(error) {
    yield call(updateErrorLogs(error));
  }
};

export const validateResetId = function*(action) {
  try{
    const response = yield call(validateResetPassword, action.uuid);
    if(response.data !== 'success') {
      yield put(push(authPath.login));
      switch(response.data) {
        case 'already used': {
          yield put(addNotification({type: 'danger', message: L.t('Auth.resetPassword.expired')}));
          break;
        }
        default: {
          yield put(addNotification({type: 'danger', message: L.t('Auth.resetPassword.invalid')}));
        }
      }
    }
  } catch(error) {
    yield call(updateErrorLogs(error));
  }
};

export const resetPassword = function*(action) {
  try {
    yield put(setButtonState(true));
    const response = yield call(requestResetPassword, action.uuid, action.password);
    yield put(setButtonState(false));
    switch(response.data) {
      case 'already used': {
        yield put(push(authPath.login));
        yield put(addNotification({type: 'danger', message: L.t('Auth.resetPassword.expired')}));
        break;
      }
      case 'success': {
        yield put(push(authPath.login));
        yield put(addNotification({type: 'success', message: L.t('Auth.resetPassword.success')}));
        break;
      }
      default: {
        yield put(addNotification({type: 'danger', message: L.t('Auth.resetPassword.invalid')}));
      }
    }
  } catch (error) {
    yield put(setButtonState(false));
    yield call(updateErrorLogs(error));
  }

};

export const verifyPhone = function*(action) {
  try{
    const response = yield call(checkExistingPhone, action.number);
    if(response.data.isRegistered) {
      response.data.isActivated ? yield put(updateSignupResponse({registedPhone: L.t('Auth.signup.errors.phoneExist')})) :
        yield put(updateSignupResponse({registedPhone: L.t('Auth.signup.errors.notActivatedError')}));
    }
  } catch (error) {
    yield put(updateErrorLogs(error));
  }
};

export const verifyEmail = function*(action) {
  try{
    const response = yield call(checkExistingEmail, action.email);
    if(response.data.isRegistered) {
      response.data.isActivated ? yield put(updateSignupResponse({registedEmail: L.t('Auth.signup.errors.existingEmail')})) :
        yield put(updateSignupResponse({registedEmail: L.t('Auth.signup.errors.notActivatedError')}));
    }
  } catch (error) {
    yield put(updateErrorLogs(error));
  }
};

export default function* authSaga() {
  yield takeEvery(CREATE_ACCOUNT, createAccount);
  yield takeEvery(REQUEST_FORGET_PASSWORD, forgotPassword);
  yield takeEvery(ACTIVATE_ACCOUNT, activateAccount);
  yield takeEvery(VALIDATE_RESET_PASSWORD_ID, validateResetId);
  yield takeEvery(RESET_PASSWORD, resetPassword);
  yield takeEvery(VERIFY_PHONE, verifyPhone);
  yield takeEvery(VERIFY_EMAIL, verifyEmail);
}