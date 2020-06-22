import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/common-components/CustomButton';
import './LoginFooter.scss';
import { authPath } from 'constants/router-constants';
import PropTypes from 'prop-types';


const LoginFooter = ({ buttonClick }) => (
  <React.Fragment>
    <Button
      onClick={buttonClick}
      className="login-footer--button"
      color="primary"
      size="lg"
      block
      round
    >
      Get started
    </Button>
    <div className="login-footer--navigator">
      <div className="login-footer--link login-footer--link__signup">
        <h6>
          <Link to={authPath.signup}>
          Create Account
          </Link>
        </h6>
      </div>
      <div className="login-footer--link">
        <Link to={authPath.forgotPassword}>
        Forgot Password?
        </Link>
      </div>
    </div>
  </React.Fragment>
);

LoginFooter.propTypes = {
  buttonClick: PropTypes.func,
};

export default LoginFooter;
