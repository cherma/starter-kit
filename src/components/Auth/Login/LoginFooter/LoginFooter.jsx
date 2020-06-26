import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/common-components/CustomButton';
import './LoginFooter.scss';
import { authPath } from 'constants/router-constants';
import L from 'utils/localization';

const LoginFooter = ({ buttonClick, isLoading }) => (
  <React.Fragment>
    <Button
      disabled={isLoading}
      onClick={buttonClick}
      className="login-footer--button"
      color="primary"
      size="lg"
      block
      round
    >
      {L.t('Auth.login.content.getStarted')}
    </Button>
    <div className="login-footer--navigator">
      <div className="login-footer--link login-footer--link__signup">
        <h6>
          <Link to={authPath.signup}>
            {L.t('Auth.login.content.signup')}
          </Link>
        </h6>
      </div>
      <div className="login-footer--link">
        <Link to={authPath.forgotPassword}>
          {L.t('Auth.login.content.forgotPassword')}
        </Link>
      </div>
    </div>
  </React.Fragment>
);

LoginFooter.propTypes = {
  buttonClick: PropTypes.func,
  isLoading: PropTypes.bool
};

export default LoginFooter;
