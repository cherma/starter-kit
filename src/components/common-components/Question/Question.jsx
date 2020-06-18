import React from 'react';
import MathJax from 'react-mathjax-preview';
import QuestionImage from './QuestionImage';
import Option from './Option';
import TimeTaken from './TimeTaken';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import './Question.style.scss';

const Question = ({ questionData, showWrongOption }) => {
  const { question, questionId, imageType, options, solution, imageSolution, timeTaken, overtimed } = questionData;
  return(
    <React.Fragment>
      <Card className="question">
        <CardBody>
          <div className="question--wrapper">
            <MathJax math={question}/>
            <QuestionImage isImage={imageType} imageId={questionId} />
          </div>
          <div className="question--options">
            {
              options.map((option, index) =>
                <Option optionData={option}
                  showWrongOption={showWrongOption}
                  solution={solution}
                  imageSolution={imageSolution}
                  questionId={questionId}
                  index={index} key={option.optionId} />
              )}
          </div>
          <div className="question--time-taken">
            <TimeTaken />
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

Question.propTypes = {
  questionData: PropTypes.shape({
    questionId: PropTypes.number,
    question: PropTypes.string,
    timeTaken: PropTypes.number,
    markedFlag: PropTypes.bool,
    solution: PropTypes.string,
    options: PropTypes.object,
    imageType: PropTypes.string,
    imageSolution: PropTypes.bool,
    overtimed: false,
  }),
  showWrongOption: PropTypes.bool,
};

export default Question;