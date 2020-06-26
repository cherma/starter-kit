/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/common-components/Sidebar';
import { Container } from 'reactstrap';
import Header from './Header';
import PanelHeader from './PanelHeader';
import { dashboard } from 'constants/router-constants';
import Dashboard from 'components/Dashboard';
import { authPath } from 'constants/router-constants';

const DashboardLayout = ({ history, userInfo, location, signOut, goToPage }) => {
  const {isLoggedIn, firstName, profileImage, logoUrl } = userInfo;
  useEffect(()=>{
    if(!isLoggedIn) {
      goToPage(authPath.login);
    }
  },[]);
  return (
    <div className="wrapper">
      <Sidebar location={location} profileImage={profileImage} firstName={firstName} logo={logoUrl} />
      <div className="main-panel">
        <Header routes={dashboard} history={history} location={location} signOut={signOut}/>
        <div>
          <PanelHeader size="sm"/>
          <div className="content">
            <Dashboard  history={history} location={location} isLoggedIn={isLoggedIn}/>
          </div>
        </div>
        <footer className={'footer'}>
          <Container>
            <div className="copyright">
            &copy;2018, All rights reserved by skilloptima Pvt Ltd.
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  userInfo: PropTypes.shape ({
    isLoggedIn: PropTypes.bool,
    creditPoints: PropTypes.string,
    profileImage: PropTypes.string,
    firstName: PropTypes.string,
    logoUrl: PropTypes.string
  }),
  location: PropTypes.object,
  history: PropTypes.object,
  signOut: PropTypes.func,
  goToPage: PropTypes.func
};

export default DashboardLayout;