import {
  UPDATE_ERROR_LOGS,
  UPDATE_USER_INFO
} from './types';

export const updateErrorLogs = data => {
  return {type: UPDATE_ERROR_LOGS, data };
};

export const updateUserInfo =  userInfo => {
  return { type: UPDATE_USER_INFO, userInfo };
};