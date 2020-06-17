import React from 'react';
import PropTypes from 'prop-types';
import {
  NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge
} from 'reactstrap';
const infoStyle={
  paddingTop: 10,
  paddingLeft: 4,
  flex: 1,
  maxWidth: 80,
  textTransform: 'capitalize',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
const DesktopNavItmes = ({ history, creditPoints, imagePreviewUrl, profileName, changePassword, signOut, dropdownToggle, dropdownOpen }) => {
  return(
    <React.Fragment>
      <NavItem>
        <a title="Trophies" className="nav-link">
          <i className="now-ui-icons sport_trophy"><Badge id="badge-style" color="secondary">{creditPoints}</Badge></i>
          <p>
            <span className="d-lg-none d-md-block">Trophies</span>
          </p>
        </a>
      </NavItem>
      <Dropdown title="Options" nav isOpen={dropdownOpen} toggle={dropdownToggle}>
        <DropdownToggle caret nav>
          <i className="now-ui-icons location_world"></i>
          <p>
            <span className="d-lg-none d-md-block">options</span>
          </p>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <div className="user" style={{display:'flex', cursor:'pointer'}} onClick={() =>history.push('/user/profile')}>
              <div className="photo" style={{height:34, width:34}}>
                <img src={imagePreviewUrl} height={34} alt="Avatar"/>
              </div>
              <div className="info" style={infoStyle}>
                <a style={{color:'#5f6368'}}>
                  {profileName}
                </a>
              </div>
            </div>
          </DropdownItem>
          <DropdownItem tag="a" style={{ cursor: 'pointer',color:'#5f6368' }} onClick={changePassword}>Change Password</DropdownItem>
          <DropdownItem tag="a" style={{ cursor: 'pointer',color:'#5f6368' }} onClick={signOut}>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

DesktopNavItmes.propTypes = {
  creditPoints: PropTypes.string,
  imagePreviewUrl: PropTypes.string,
  profileName: PropTypes.string,
  changePassword: PropTypes.func,
  signOut: PropTypes.func,
  dropdownToggle: PropTypes.func,
  dropdownOpen: PropTypes.bool,
  history: PropTypes.object,
};

export default DesktopNavItmes;