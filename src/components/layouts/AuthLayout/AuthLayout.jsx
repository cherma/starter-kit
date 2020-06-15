import React from 'react';
import { Container } from 'reactstrap';
import PagesHeader from 'components/common-components/Header/PagesHeader';
import { Switch, Route } from 'react-router';
import Login from 'components/Login';
import './AuthLayout.style.scss';
import bgImage from 'assets/img/bg-img.jpeg';

const AuthLayout = () =>  {
  return (
    <div className="auth-layout" style={{ backgroundImage: 'url('+bgImage+')' }}>
      <PagesHeader/>
      <div className="wrapper wrapper-full-page" >
        <div className="full-page section-image"  >
          <Switch>
            <Route path={'/login'} component={Login}/>
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

export default AuthLayout;