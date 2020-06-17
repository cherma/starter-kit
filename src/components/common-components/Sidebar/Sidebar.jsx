import React from 'react';
import Header from './Header';
import CollapseMenu from './CollapseMenu';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { dashboard } from 'constants/router-constants';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Sidebar =({ logo, avatar, profileName }) =>
  <div className="sidebar" data-color="blue">
    <Header logo={logo} />
    <PerfectScrollbar className="sidebar-wrapper">
      <Nav>
        {
          dashboard.map((prop,key) => {
            if(prop.collapse) {
              return (<CollapseMenu avatar={avatar} profileName={profileName} child={prop} key={key}/>);
            }
            return (<li key={key}>
              <NavLink to={prop.path} className="nav-link" activeClassName="active">
                <i className={'now-ui-icons '+prop.icon}></i>
                <p>{prop.name}</p>
              </NavLink>
            </li>);
          })
        }
      </Nav>
    </PerfectScrollbar>
  </div>;

Sidebar.propTypes = {
  logo: PropTypes.string,
  avatar: PropTypes.string,
  profileName: PropTypes.string,
};

export default Sidebar;
