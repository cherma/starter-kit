import React from 'react';
import Header from './Header';
import CollapseMenu from './CollapseMenu';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const dashRoutes = [
  { path: '/path-one', name: 'Path One', icon: 'media-2_sound-wave'},
  { path: '/path-two', name: 'Path Two', icon: 'media-2_sound-wave'},
  { path: '/path-three', name: 'Path Three', icon: 'media-2_sound-wave'},
];
const Sidebar =({ logo, avatar, profileName }) =>
  <div className="sidebar" data-color="blue">
    <Header />
    <PerfectScrollbar className="sidebar-wrapper">
      <Nav>
        {
          dashRoutes.map((prop,key) => {
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
