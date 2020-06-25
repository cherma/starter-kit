import {
  GET_USER_INFO,
  SIGN_OUT,
  FLUSH_ALL,
  DO_LOGIN,
  REQUEST_FORGET_PASSWORD,
  ACTIVATE_ACCOUNT,
  UPDATE_ACTIVATE_ACCOUNT,
  UPDATE_AUTH_LOADER,
  VALIDATE_RESET_PASSWORD_ID,
  RESET_PASSWORD,
  SUBMIT_ACTION
} from './types';


export const doLogin = (email, password) => {
  return { type: DO_LOGIN, email, password };
};

export const getUserInfo = () => {
  return { type: GET_USER_INFO };
};

export const requestForgotPassword = (email, captcha) => {
  return { type: REQUEST_FORGET_PASSWORD, email, captcha};
};

export const setButtonState = (state) => {
  return { type: SUBMIT_ACTION, state};
};

export const activateAccount = uuid => {
  return { type:ACTIVATE_ACCOUNT, uuid };
};

export const updateActivateAccount = (message, isProfileChange, isLoading) => {
  return { type:UPDATE_ACTIVATE_ACCOUNT, message, isProfileChange, isLoading };
};

export const updateAuthLoader = (status) => {
  return { type:UPDATE_AUTH_LOADER, status };
};

export const validateId = (uuid) => {
  return { type: VALIDATE_RESET_PASSWORD_ID, uuid };
};

export const resetPassword = (uuid, password) => {
  return { type: RESET_PASSWORD, uuid, password };
};

export const signout = () => {
  return { type: SIGN_OUT};
};

export const flushAll = () => {
  return { type: FLUSH_ALL};
};