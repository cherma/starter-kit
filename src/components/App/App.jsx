import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import { Switch, Route } from 'react-router';
import { renderIf } from 'utils/helper';

const App = ({ isAppLoading, setupApp, goToPage, isLoggedIn}) => {
  useEffect(() => {
    setupApp();
  });
  return (
    <React.Fragment>
      {
        renderIf(
          () => isAppLoading,
          () => <div> App  Loader</div>,
          () =>  <Switch>
            <Route path={'/user'} component={DashboardLayout} />
            <Route path={'/'} component={()=><AuthLayout isLoggedIn={isLoggedIn} goToPage={goToPage} />} />
          </Switch>
        )
      }
    </React.Fragment>
  );
};

App.propTypes = {
  isAppLoading: PropTypes.bool,
  setupApp: PropTypes.func,
  goToPage: PropTypes.func,
  isLoggedIn: PropTypes.bool
};
export default App;
