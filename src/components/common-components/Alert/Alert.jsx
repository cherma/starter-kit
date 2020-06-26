import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';

const Alert = ({visibleAlert}) =>{
  return( <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>);
};

Alert.propTypes = {
  visibleAlert: PropTypes.any
};

export default Alert;
