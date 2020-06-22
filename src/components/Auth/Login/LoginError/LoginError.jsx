import React from 'react';
import './LoginError.css';
import PropTypes from 'prop-types';

const LoginError = ({ emailError, passwordError, isLoading, email}) =>
  <React.Fragment>
    {emailError && <h6 className="login-message error-message"> {emailError} </h6>}
    {(passwordError && emailError === ``) && <h6 className="login-message error-message"> {passwordError} </h6>}
    {isLoading && <h6 className="login-message"> CHECKING LOGIN... </h6>}
  </React.Fragment>;

LoginError.propTypes = {
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  email: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default LoginError;