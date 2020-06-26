import { SET_MARKED_QUESTION, FLUSH_ALL } from '../actions/types';
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

    case FLUSH_ALL: return {
      ...questionType
    };
    default: return state;
  }
};

export default markQuestionReducer;