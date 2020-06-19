import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authPath } from 'constants/router-constants';

const PrivateRoute = ({ component: Component,allowUrl, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      allowUrl ?  <Component {...rest} {...props}  /> :
        <Redirect
          to={{
            pathname: authPath.login,
          }}
        />
    }
  />;

PrivateRoute.propTypes = {
  component: PropTypes.element,
  allowUrl: PropTypes.bool,
  location: PropTypes.any
};

export default PrivateRoute;