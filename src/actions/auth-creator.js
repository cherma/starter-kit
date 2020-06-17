import {
  GET_USER_INFO,
  SIGN_OUT,
  FLUSH_ALL
} from './types';


export const doLogin = (email, password) => {
  return { type: GET_USER_INFO, email, password };
};

export const getUserInfo = () => {
  return { type: GET_USER_INFO };
};

export const signout = () => {
  return { type: SIGN_OUT};
};

export const flushAll = () => {
  return { type: FLUSH_ALL};
};