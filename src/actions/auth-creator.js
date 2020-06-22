import {
  GET_USER_INFO,
  SIGN_OUT,
  FLUSH_ALL,
  DO_LOGIN,
  REQUEST_FORGET_PASSWORD
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

export const signout = () => {
  return { type: SIGN_OUT};
};

export const flushAll = () => {
  return { type: FLUSH_ALL};
};