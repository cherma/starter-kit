import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

const InfoArea = ({icon, iconColor, title, description}) => {
  return (
    <div className="info-area info-horizontal">
      {
        icon !== undefined ? (
          <div className={'icon icon-'+iconColor}>
            <i className={icon}></i>
          </div>
        ):null
      }
      <div className="description">
        <h5 className={'info-title'}>{title}</h5>
        <p className="description">
          {description}
        </p>
      </div>
    </div>
  );
};

InfoArea.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.oneOf(['info','success','primary','warning','danger','neutral']),
  title: PropTypes.node,
  description: PropTypes.node
};

export default InfoArea;
