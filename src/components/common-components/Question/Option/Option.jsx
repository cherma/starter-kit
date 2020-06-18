import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common-components/CustomButton';
import QuestionImage from '../QuestionImage';
import MathJax from 'react-mathjax-preview';
import OptionDescription from './OptionDescription';
import './Option.style.scss';

const labelObj = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };
const styles = {
  wrong: {
    backgroundColor: 'rgb(245, 211, 211)',
    borderLeft: '2px solid rgb(255, 54, 54)'
  },
  correct: {
    backgroundColor: 'rgb(219, 254, 219)',
    borderLeft: '2px solid rgb(24, 206, 15)'
  }
};

const getStyleMapper = (correctAnswer, userSelected) => {
  const optionStyle = {
    style: {},
    iconClass: ''
  };
  if (correctAnswer) {
    optionStyle.style = styles.correct;
    optionStyle.iconClass = 'success';
  } else if (!correctAnswer && userSelected ) {
    optionStyle.style = styles.wrong;
    optionStyle.iconClass = 'danger';
  }
  return optionStyle;
};

const Option = ({ optionData, showWrongOption, solution, imageSolution, questionId, index }) =>{
  const { optionId, correctAnswer, imageType, option, userSelected } = optionData;
  const { iconClass, style } = getStyleMapper(correctAnswer, userSelected);
  return(
    <div key={optionId} className="option-wrapper" style={{...style }}>
      <div className="option-content">
        <div className="option-content__button">
          <Button color={iconClass} round icon>{labelObj[index]}</Button>
        </div>
        <div className="option-content__option">
          <MathJax math={option} />
          <QuestionImage isImage={imageType} imageId={optionId} />
        </div>
      </div>
      <OptionDescription correctAnswer={correctAnswer}
        userSelected={userSelected}
        showWrongOption={showWrongOption}
        solution={solution}
        imageSolution={imageSolution}
        questionId={questionId} />
    </div>
  );
};

Option.propTypes = {
  optionData: PropTypes.shape({
    optionId: PropTypes.string,
    correctAnswer: PropTypes.bool,
    option: PropTypes.number,
    imageType: PropTypes.bool,
    userSelected: PropTypes.bool
  }),
  showWrongOption: PropTypes.bool,
  solution: PropTypes.string,
  imageSolution: PropTypes.bool,
  questionId: PropTypes.number,
  index: PropTypes.number
};

export default Option;