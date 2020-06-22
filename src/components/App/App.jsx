import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import { Switch, Route } from 'react-router';
import { renderIf } from 'utils/helper';
import AppLoader from 'components/common-components/AppLoader';
import Alert from 'components/common-components/Alert';

const App = ({ isAppLoading, setupApp, goToPage, isLoggedIn, visibleAlert}) => {
  useEffect(() => {
    setupApp();
  });
  return (
    <React.Fragment>
      {
        renderIf(
          () => isAppLoading,
          () => <AppLoader />,
          () =>  <Switch>
            <Route path={'/user'} component={DashboardLayout} />
            <Route path={'/'} component={()=><AuthLayout isLoggedIn={isLoggedIn} goToPage={goToPage} />} />
          </Switch>
        )
      }
      { visibleAlert && <Alert visibleAlert={visibleAlert} /> }
    </React.Fragment>
  );
};

App.propTypes = {
  isAppLoading: PropTypes.bool,
  setupApp: PropTypes.func,
  goToPage: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  visibleAlert: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ])
};
export default App;
