import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/common-components/CustomButton';
import './LoginFooter.css';
import { preLogin } from 'constants/router-constants';
import PropTypes from 'prop-types';


const LoginFooter = ({ buttonClick }) => (
  <React.Fragment>
    <Button
      onClick={buttonClick}
      className="login-button"
      color="primary"
      size="lg"
      block
      round
    >
      Get started
    </Button>
    <div className="pull-left">
      <h6>
        <Link to={preLogin.signup} className="link login-footer-link">
          Create Account
        </Link>
      </h6>
    </div>
    <div className="pull-right">
      <Link to={preLogin.forgotPassword} className="link login-footer-link">
        Forgot Password?
      </Link>
    </div>
  </React.Fragment>
);

LoginFooter.propTypes = {
  buttonClick: PropTypes.func,
};

export default LoginFooter;
