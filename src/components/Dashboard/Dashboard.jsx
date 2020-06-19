import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router';
import { dashboardPath as dashboard } from 'constants/router-constants';
import PrivateRoute from './PrivateRoute';
import PropTypes from 'prop-types';

const MarkQuestions = lazy(() => import('./MarkQuestions'));
const WrongQuestions = lazy(() => import('./WrongQuestions'));
const OvertimeQuestions = lazy(() => import('./OvertimeQuestions'));
const UnAnsweredQuestions = lazy(() => import('./UnAnsweredQuestions'));


const Dashboard = ({ isLoggedIn }) =><React.Fragment>
  <Switch>
    <Suspense fallback={<div>Loading...</div>}>
      <PrivateRoute allowUrl={isLoggedIn}  exact path={dashboard.profile} component={UnAnsweredQuestions}/>
      <PrivateRoute allowUrl={isLoggedIn}  exact path={dashboard.markQuestion} component={MarkQuestions}/>
      <PrivateRoute allowUrl={isLoggedIn}  exact path={dashboard.wrongQuestion} component={WrongQuestions}/>
      <PrivateRoute allowUrl={isLoggedIn}  exact path={dashboard.testHistory} component={OvertimeQuestions}/>
      <PrivateRoute allowUrl={isLoggedIn} component={()=><div> Not Found</div>} />
    </Suspense>
  </Switch>
</React.Fragment>;

Dashboard.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Dashboard;