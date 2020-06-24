import React, { Suspense, lazy, useEffect } from 'react';
import PropTypes from 'prop-types';
import { testPath, dashboardPath, authPath } from 'constants/router-constants';
import { Route, Switch } from 'react-router-dom';

const TestPage = lazy(()=>import('../../TestPage'));

const TestLayout = ({ goToPage, isLoggedIn, isTestOn }) => {
  useEffect(()=>{
    if(!isTestOn) {
      if(isLoggedIn)
        goToPage(dashboardPath.profile);
      else
        goToPage(authPath.login);
    }
  },[]);
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="main-panel test-layout">
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route to={testPath.takeTest} component={TestPage} />
            </Suspense>
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

TestLayout.propTypes = {
  goToPage: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isTestOn: PropTypes.bool
};

export default TestLayout;
