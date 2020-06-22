import http from './http';

export const getMarkQuestions = (args) => {
  const {courseId, isFullTest, offset, practiceId, categoryId, subCategoryList, testSessionId, testSectionList} = args;
  const formData  = new FormData();
  formData.append('courseId', courseId);
  formData.append('isFullTest',isFullTest);
  formData.append('offset',offset);
  practiceId && formData.append('practiceId',practiceId);
  categoryId && formData.append('categoryId',categoryId);
  subCategoryList && formData.append('subCategoryList',subCategoryList);
  testSessionId && formData.append('testSessionId',testSessionId);
  testSectionList && formData.append('testSectionList',testSectionList);

  return http.post('/skilloptima/questions/markQuestions', formData);
};

export const getPracticeList = (args) => {
  return http.get('/skilloptima/assessment/getMarkedQuestionPractice', {params : {...args}});
};

export const getCategoryList = (args) => {
  return http.get('/skilloptima/assessment/getMarkedQuestionCategory', {params: {courseId: args.courseId}});
};

export const getTestList = (args) => {
  return http.get('/skilloptima/assessment/getMarkedQuestionTests', {params: {courseId: args.courseId}});
};

export const getSubCategoryList = (params) => {
  return http.get('/skilloptima/assessment/getMarkedQuestionSubcategory', params);
};

export const getSectionList = (params) => {
  return http.get('/skilloptima/assessment/getMarkedQuestionSections', params);
};