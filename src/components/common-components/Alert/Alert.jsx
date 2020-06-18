import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

const Alert = ({ children, onConfirmCallBack, onCancelCallBack, customClass,   }) =>
  <SweetAlert
    warning
    showCancel
    customClass="customized-sweet-alert"
    className="customized-sweet-alert"
    confirmBtnText="Yes"
    onConfirm={onConfirmCallBack}
    onCancel={onCancelCallBack}
  >
    {children}
  </SweetAlert>;

export default Alert;
