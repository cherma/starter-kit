import React from 'react';
import PropTypes from 'prop-types';
import Question from 'components/common-components/Question';
import { filterOptions as filterOptionPropTypes } from 'constants/prop-type-constants';
import { filterParamsConstructor } from 'utils/helper';
import FilterMenu from '../FilterMenu/';

const MarkQuestions = ({ activeStream, markedQuestionsData, fetchMarkedQuestion  }) =>{
  const { questions, filterOptions } = markedQuestionsData;
  const { practiceOptions, testOptions, categoryOptions, testSectionOptions, subCategoryOptions } = filterOptions;

  const changeHandler = (data, field) => {
    const params = filterParamsConstructor(data, field, activeStream);
    fetchMarkedQuestion(data, field, params);
  };


  return(<React.Fragment>
    <FilterMenu
      practiceOptions={practiceOptions}
      testOptions={testOptions} categoryOptions={categoryOptions}
      testSectionOptions={testSectionOptions} subCategoryOptions={subCategoryOptions}
      updateData={changeHandler}/>
    { questions.map( (value, index)=>
      <Question
        key={value.questionId}
        isMarkQuestion
        markClick={this.handleClickMarkQuestion}
        dataQuestion={value}
        number={index + 1}
      />
    )}
  </React.Fragment>);
};

MarkQuestions.propTypes = {
  activeStream: PropTypes.string,
  markedQuestionsData: PropTypes.shape({
    questions: PropTypes.array,
    filterOptions: PropTypes.shape(filterOptionPropTypes)
  }),
  fetchMarkedQuestion: PropTypes.func
};

export default MarkQuestions;