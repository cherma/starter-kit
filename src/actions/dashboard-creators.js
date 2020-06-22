import {
  SET_MARKED_QUESTION,
  GET_MARKED_QUESTION,
  GET_TEST_TYPE_MARKED_QUESTIONS
} from './types';

export const setMarkedQuestionFilter = (data, field) => {
  return ({ type: SET_MARKED_QUESTION, data, field });
};

export const fetchMarkedQuestions = (data, field, params) => {
  return ({ type: GET_MARKED_QUESTION, data, field, params });
};

export const fetchTestTypeQuestions = (params, data) => {
  return ({ type: GET_TEST_TYPE_MARKED_QUESTIONS, params, data});
};