import React from 'react';
import PropTypes from 'prop-types';

const PanelHeader = ({ size, content }) =><div className={'panel-header ' + (size !== undefined ? 'panel-header-'+size:'')}>
  {content}
</div>;

PanelHeader.propTypes = {
  size: PropTypes.string,
  content: PropTypes.any
};
export default PanelHeader;
