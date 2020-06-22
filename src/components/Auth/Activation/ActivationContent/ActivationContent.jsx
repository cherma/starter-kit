import React from 'react';
import PropTypes from 'prop-types';
import Success from './Success';
import Wrong from './Wrong';
import './ActivationContent.style.scss';
import { renderIf } from 'utils/helper';

const ActivationContent = ({ message, icon }) =><React.Fragment>
  <div className="activation-content">
    <div className="activation-content--image">
      {
        renderIf(
          ()=> icon === 'success',
          () => <Success />,
          () => <Wrong />
        )}
    </div>
    <div className="activation-content--message">{message}</div>
  </div>
</React.Fragment>;

export default ActivationContent;

ActivationContent.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.string
};