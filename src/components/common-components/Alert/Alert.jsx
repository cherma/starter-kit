import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

const Alert = ({visibleAlert}) =>{
  console.log(visibleAlert);
  return( <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>);
}

export default Alert;
