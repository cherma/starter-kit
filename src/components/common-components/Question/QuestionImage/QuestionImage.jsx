import React from 'react';
import { renderIf } from 'utils/helper';
import PropTypes from 'prop-types';

const QuestionImage = ({ isImage, imageId }) =><React.Fragment>
  {
    renderIf(
      () => isImage,
      () => <div className="question-image">
        <img src={`/skilloptima/assessment/image/question/${imageId}`} alt={'skill-optima'} />
      </div>
    )}
</React.Fragment>;

QuestionImage.propTypes = {
  isImage: PropTypes.bool,
  imageId: PropTypes.number
};

export default QuestionImage;