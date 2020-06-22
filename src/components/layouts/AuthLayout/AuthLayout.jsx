import React, { Suspense, lazy, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import PagesHeader from 'components/common-components/Header/PagesHeader';
import { Switch, Route } from 'react-router';
import { authPath, dashboardPath } from 'constants/router-constants';

import './AuthLayout.style.scss';
import bgImage from 'assets/img/bg-img.jpeg';

const Login = lazy(() => import('../../Auth/Login'));
const ForgotPassword = lazy(() => import('../../Auth/ForgotPassword'));
const Activation = lazy(()=>import('../../Auth/Activation'));
const ResetPassword = lazy(()=> import('../../Auth/ResetPassword'));

export const SITE_KEY = '6LdOsIQUAAAAAAKu33zJmN0M_tC3wcygzIgaZwY7';

const AuthLayout = ({ isLoggedIn, goToPage }) =>  {
  useEffect(()=>{
    isLoggedIn && goToPage(dashboardPath.markQuestion);
  });

  return (
    <div className="auth-layout" style={{ backgroundImage: 'url('+bgImage+')' }}>
      <PagesHeader/>
      <div className="wrapper wrapper-full-page" >
        <div className="full-page section-image"  >
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path={authPath.resetPassword} component={()=><ResetPassword/>} />
              <Route exact path={authPath.login} component={Login}/>
              <Route path={authPath.forgotPassword} component={()=><ForgotPassword sitekey={SITE_KEY} />}/>
              <Route path={authPath.activateAccount} component={Activation} />
            </Suspense>
          </Switch>
          <footer className={'footer' }>
            <Container >
              <div className="copyright">
                            &copy;2018, All rights reserved by skilloptima Pvt Ltd.
              </div>
            </Container>
          </footer>
        </div>
      </div>

    </div>
  );
};

AuthLayout.propTypes = {
  isLoggedIn: PropTypes.bool,
  goToPage: PropTypes.func
};

export default AuthLayout;