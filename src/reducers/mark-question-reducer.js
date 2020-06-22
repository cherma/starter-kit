import { SET_MARKED_QUESTION } from '../actions/types';
import { questionType } from 'constants/data-type-constants';

const initialState = {
  ...questionType
};

const markQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARKED_QUESTION: {
      return {
        ...state,
        questions: action.questions,
        filterOptions: action.filterOptions
      };
    }

    default: return state;
  }
};

export default markQuestionReducer;