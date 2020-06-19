import React from 'react';
import PropTypes from 'prop-types';

const PanelHeader = ({ size, content }) =>{
  return(<div className={'panel-header ' + (size ? 'panel-header-'+size:'')}>
    {content}
  </div>
  );
};

PanelHeader.propTypes = {
  size: PropTypes.string,
  content: PropTypes.string,
};

export default PanelHeader;