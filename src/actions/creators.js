import {
  GET_USER_INFO,
} from './types';

export const getUserInfo = () => {
  return { type: GET_USER_INFO };
};