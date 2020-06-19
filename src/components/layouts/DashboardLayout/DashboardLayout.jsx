import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/common-components/Sidebar';
import { Container } from 'reactstrap';
import Header from './Header';
import PanelHeader from './PanelHeader';
import { dashboard } from 'constants/router-constants';
import Dashboard from 'components/Dashboard';

const DashboardLayout = ({ history, userInfo, location }) =>{
  console.log(userInfo)
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel">
        <Header routes={dashboard} history={history} location={location}/>
        <div>
          <PanelHeader size="sm"/>
          <div className="content">
            <Dashboard  history={history} location={location} isLoggedIn={userInfo.isLoggedIn}/>
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
    profileName: PropTypes.string,
    imagePreviewUrl: PropTypes.string,
    firstName: PropTypes.string
  }),
  location: PropTypes.object,
  history: PropTypes.object
};

export default DashboardLayout;