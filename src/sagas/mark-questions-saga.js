import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_MARKED_QUESTION, GET_TEST_TYPE_MARKED_QUESTIONS } from 'actions/types.js';
import { updateErrorLogs, fetchTestTypeQuestions } from 'actions';
import { getMarkQuestions, getPracticeList, getCategoryList, getSubCategoryList, getTestList, getSectionList } from 'api/mark-questions';
import { questionType } from 'constants/data-type-constants';



export const getMarkQuestion = function*(action) {
  try {
    const { params, data, field } = action;
    switch(field) {
      case 'testType': {
        yield put(fetchTestTypeQuestions(params, data));
        break;
      }
      case 'practice': {
        yield call(getPractice(action));
        break;
      }
      case 'category': {
        yield call(getCategory(action));
        break;
      }
      case 'subCategory': {
        yield call(getSubCategory(action));
        break;
      }
      case 'testSession': {
        yield call(getTest(action));
        break;
      }
      case 'testSectionList': {
        yield call(getTestSection(action));
        break;
      }

    }
  } catch (error) {
    yield call(updateErrorLogs(error));
  }
};

export const getTestType = function*(action) {
  try {
    const markQustion = {...questionType};
    const { params, data } = action;
    markQustion.questions = yield call(getMarkQuestions, params);
    if(data.isFullTest){
      markQustion.filterOptions = yield call(getTestList({courseId: params.courseId}));
    } else {
      markQustion.filterOptions = yield call(getPracticeList({courseId: params.courseId}));
    }
  } catch(error) {
    yield put(updateErrorLogs(error));
  }
};

export const getPractice = function*(action) {
  try {
    const { params } = action;
    const markQustion = {...questionType};
    if(params.practiceId) {
      markQustion.questions = yield call(getMarkQuestions, params);
      markQustion.filterOptions = yield getCategoryList({courseId:this.props.activeStream});
    } else {
      markQustion.questions = yield call(getMarkQuestions, {courseId:this.props.activeStream, isFullTest:false, offset:0});
    }
  } catch (error) {
    yield put(updateErrorLogs(error));
  }
};

export const getCategory = function*(action) {
  try {
    const { params } = action;
    const markQustion = {...questionType};

    if(params.categoryId) {
      markQustion.questions = yield call(getMarkQuestions, params);
      markQustion.filterOptions = yield getSubCategoryList({courseId:this.props.activeStream});
    } else {
      markQustion.questions = yield call(getMarkQuestions, {...params, categoryId: ''});
    }
  } catch (error) {
    yield put(updateErrorLogs(error));
  }
};

export const getTest = function*(action) {
  try {
    const { params } = action;
    const markQustion = {...questionType};

    if(params.categoryId) {
      yield call(getMarkQuestions, params);
      markQustion.filterOptions = yield getSectionList({testId:this.props.activeStream});
    } else {
      markQustion.questions = yield call(getMarkQuestions, {...params, testId: ''});
    }
  } catch (error) {
    yield put(updateErrorLogs(error));
  }
};

export const getSubCategory = function*(action) {
  try {
    const { params } = action;
    const markQustion = {...questionType};

    if(params.subCategoryList) {
      markQustion.questions = yield call(getMarkQuestions, params);
    } else {
      markQustion.questions = yield call(getMarkQuestions, {...params, subCategoryList: ''});
    }
  } catch (error) {
    yield put(updateErrorLogs(error));
  }
};

export const getTestSection = function*(action) {
  try {
    const { params } = action;
    const markQustion = {...questionType};

    if(params.testSectionList) {
      markQustion.questions = yield call(getMarkQuestions, params);
    } else {
      markQustion.questions = yield call(getMarkQuestions, {...params, testSectionList: ''});
    }
  } catch (error) {
    yield put(updateErrorLogs(error));
  }
};

export default function* markQustionSaga() {
  yield takeEvery(GET_MARKED_QUESTION, getMarkQuestion);
  yield takeEvery(GET_TEST_TYPE_MARKED_QUESTIONS, getTestType);
}