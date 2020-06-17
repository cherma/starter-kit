import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Sidebar from 'components/common-components/Sidebar';
import { Container } from 'reactstrap';
import Header from './Header';
import PanelHeader from './PanelHeader';
import { dashboard } from 'constants/router-constants';
import PropTypes from 'prop-types';

const Dashboard = ({ history, creditPoints, profileName, imagePreviewUrl, location }) =>{
  return (
    <div className="wrapper">
      <Sidebar />
      <PerfectScrollbar>
        <div className="main-panel">
          <Header routes={dashboard} history={history} location={location}/>
          <div>
            <PanelHeader size="sm"/>
          </div>
          <footer className={'footer'}>
            <Container>
              <div className="copyright">
            &copy;2018, All rights reserved by skilloptima Pvt Ltd.
              </div>
            </Container>
          </footer>
        </div>
      </PerfectScrollbar>

    </div>
  );
};

Dashboard.propTypes = {
  creditPoints: PropTypes.string,
  profileName: PropTypes.string,
  imagePreviewUrl: PropTypes.string,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Dashboard;