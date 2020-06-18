import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax-preview';
import { renderIf } from 'utils/helper';
import { Collapse } from 'reactstrap';
import QuestionImage from '../../QuestionImage/';
import './OptionDescription.style.scss';

const OptionDescription = ({ correctAnswer, userSelected, showWrongOption, solution, imageSolution, questionId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <div className="option-description">
      {
        renderIf(
          () => !correctAnswer && userSelected && showWrongOption,
          () =>  <div className="option-description__wrong text-danger">WRONG</div>
        )
      }
      {
        renderIf(
          () => correctAnswer,
          () => <React.Fragment>
            <div className="option-description__correct-wrapper">
              <div className="option-description__solution  text-success" onClick={toggle}>Solution <i className="arrow down"></i></div>
              <Collapse isOpen={isOpen}>
                <MathJax math={solution} ></MathJax>
                <QuestionImage imageId={questionId} isImage={imageSolution} />
              </Collapse>
            </div>
            <div className="option-description__correct text-success">CORRECT</div>
          </React.Fragment>
        )
      }
    </div>
  );
};

OptionDescription.propTypes = {
  correctAnswer: PropTypes.bool,
  userSelected: PropTypes.bool,
  showWrongOption: PropTypes.bool,
  solution: PropTypes.string,
  imageSolution: PropTypes.bool,
  questionId: PropTypes.number
};

export default OptionDescription;