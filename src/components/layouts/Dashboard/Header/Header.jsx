import React, { useState, useEffect } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Container} from 'reactstrap';
import PropTypes from 'prop-types';
import { detectMob, renderIf } from 'utils/helper';
import MobNavItems from './MobNavItems';
import DesktopNavItmes from './DesktopNavItems';
import { useCurrentWitdh } from './Header.hooks';
const Header = ({ routes, location, creditPoints, imagePreviewUrl, profileName, history, signOut}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [color, setColor] = useState('transparent');
  const width = useCurrentWitdh();

  const toggle = () => {
    isOpen ? setColor('transparent') : setColor('white');
    setIsOpen(!isOpen);
  };

  const dropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getBrand = () => {
    let name = '';
    routes.map((prop) => {
      if(prop.collapse){
        prop.views.map((prop) => {
          if(prop.path === location.pathname){
            name = prop.name;
          }
          return null;
        });
      } else{
        if(prop.path === location.pathname){
          name = prop.name;
        }
        return null;
      }
    });
    return name;
  };

  const openSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  //const updateColor = () => {
  //  size < 993 && isOpen ? setColor('white') : setColor('transparent');
  //};

  const changePassword = () => history.push('/user/change-password');

  useEffect(() => {
    if(window.innerWidth < 993 && document.documentElement.className.indexOf('nav-open') !== -1){
      document.documentElement.classList.toggle('nav-open');
    }
  },[history]);

  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar expand="lg"
      className={'navbar-absolute fixed-top ' + (color === 'transparent' || width > 993 ? 'navbar-transparent ':'bg-white')}>
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button type="button" className="navbar-toggler" onClick={openSidebar}>
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <NavbarBrand style={{cursor:'pointer'}}>{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            {
              renderIf(
                () => detectMob(),
                () => <MobNavItems imagePreviewUrl={imagePreviewUrl}
                  profileName={profileName}
                  changePassword={changePassword}
                  history={history}
                  signOut={signOut} />,
                () => <DesktopNavItmes
                  creditPoints={creditPoints}
                  profileName={profileName}
                  imagePreviewUrl={imagePreviewUrl}
                  location={history}
                  dropdownToggle={dropdownToggle}
                  dropdownOpen={dropdownOpen}
                  changePassword={changePassword}
                />
              )
            }

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  history: PropTypes.object,
  routes: PropTypes.array,
  creditPoints: PropTypes.string,
  imagePreviewUrl: PropTypes.string,
  profileName: PropTypes.string,
  signOut: PropTypes.func
};

export default Header;
