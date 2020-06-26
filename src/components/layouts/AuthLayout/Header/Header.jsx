import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { authHeader } from 'constants/router-constants';
import { activeRoute } from 'utils/helper';
import L from 'utils/localization';
import $ from 'jquery';

const Header = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    $(document).click((e) => {
      const container = $('.navbar-toggler-bar');
      if ((!container.is(e.target))) {     // if the target of the click isn't the TOGGLE BUTTON...
        setIsOpen(false);
        document.documentElement.classList.remove('nav-open');
      }
    });

    return () => $(document).unbind();
  },[]);

  return (
    <Navbar expand="lg" className={isOpen ? 'bg-white navbar-absolute':'navbar-transparent navbar-absolute'}>
      <Container>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <NavbarToggler onClick={()=>setIsOpen(!isOpen)}>
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </NavbarToggler>
          </div>
          <Link to="/" className="navbar-brand">{L.t('Auth.skilloptima')}</Link>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              authHeader.map((prop,key)=>{
                return (
                  <NavItem key={key} className={`${activeRoute(location, prop.path)}`}>
                    <Link to={prop.path} className={' nav-link'}>
                      <i className={'now-ui-icons '+prop.icon}></i>
                      {prop.name}
                    </Link>
                  </NavItem>
                );
              })
            }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

Header.propTypes = {
  location: PropTypes.object
};