import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import TestLayout from '../layouts/TestLayout';
import { Switch, Route } from 'react-router';
import { renderIf } from 'utils/helper';
import AppLoader from 'components/common-components/AppLoader';
import Alert from 'components/common-components/Alert';

const App = ({ setupApp, goToPage, userInfo, visibleAlert}) => {
  const { isAppLoading, isLoggedIn, isAssessmentRunning } = userInfo;
  useEffect(() => {
    setupApp();
  },[]);
  return (
    <React.Fragment>
      {
        renderIf(
          () => isAppLoading,
          () => <AppLoader />,
          () =>  <Switch>
            <Route path={'/user'} component={DashboardLayout} />
            <Route path={'/test'} component={()=><TestLayout goToPage={goToPage} isLoggedIn={isLoggedIn} isTestOn={isAssessmentRunning} />} />
            <Route path={'/'} component={()=><AuthLayout isLoggedIn={isLoggedIn} goToPage={goToPage} />} />
          </Switch>
        )
      }
      { visibleAlert && <Alert visibleAlert={visibleAlert} /> }
    </React.Fragment>
  );
};

App.propTypes = {
  setupApp: PropTypes.func,
  goToPage: PropTypes.func,
  userInfo: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    isAssessmentRunning: PropTypes.bool,
    isAppLoading: PropTypes.bool
  }),
  visibleAlert: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ])
};
export default App;
