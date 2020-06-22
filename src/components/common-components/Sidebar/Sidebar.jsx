import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { dashboard } from 'constants/router-constants';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { detectMob } from 'utils/helper';

const Sidebar =({ logo, profileImage, firstName, location }) =>{
  const activeRoute = (path) => location.pathname.indexOf(path) > -1 ? 'active' : '';
  const minimizeSidebar = () => document.getElementsByTagName('html')[0].classList.remove('nav-open');

  return(
    <div className="sidebar" data-color="blue">
      <Header logo={logo} />
      <PerfectScrollbar className="sidebar-wrapper">
        <Nav>
          {
            dashboard.map((prop,key) => {
              if(prop.hidden || prop.redirect){
                return null;
              } else if(prop.image) {
                return (
                  <div key={key} className="user user-profile">
                    <NavLink onClick={detectMob()? minimizeSidebar : null} to={prop.path} className="nav-link" activeClassName="active">
                      <div className="photo"><img src={profileImage} alt="Avatar"/></div>
                      <div className="info">
                        <p>{firstName}</p>
                      </div>
                    </NavLink>
                  </div>
                );
              }
              return (<li className={activeRoute(prop.path)} key={key}>
                <NavLink onClick={detectMob()? minimizeSidebar : null} to={prop.path} className="nav-link" activeClassName="active">
                  <i className={'now-ui-icons '+prop.icon}></i>
                  <p>{prop.name}</p>
                </NavLink>
              </li>);
            })
          }
        </Nav>
      </PerfectScrollbar>
    </div>
  );
};

Sidebar.propTypes = {
  logo: PropTypes.string,
  profileImage: PropTypes.string,
  firstName: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default Sidebar;
