import {
  GET_QUESTION,
  SHOW_LOADER,
  HIDE_LOADER,
  UPDATE_QUESTION,
  GET_USER_INFO,
  UPDATE_USER_INFO,
  GET_STREAMS,
  UPDATE_STREAM_DATA,
} from './types';

export const getUserInfo = () => {
  return { type: GET_USER_INFO };
};

export const doLogin = (email, password) => {
  return { type: GET_USER_INFO, email, password };
};

export const updateUserInfo =  userInfo => {
  return { type: UPDATE_USER_INFO, userInfo };
};

export const fetchStreams = () => {
  return { type:GET_STREAMS };
};

export const updateStreamData = streamResponse => {
  return { type: UPDATE_STREAM_DATA, streamResponse };
};

export const getQuestion = (questionNumber, history) => {
  return { type: GET_QUESTION, questionNumber, history };
};

export const updateQuestion = question => {
  return { type: UPDATE_QUESTION, question };
};

export const startLoading = () => {
  return { type: SHOW_LOADER };
};

export const endLoading = () => {
  return { type: HIDE_LOADER };
};
