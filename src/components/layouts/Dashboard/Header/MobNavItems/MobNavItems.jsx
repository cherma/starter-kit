import React from 'react';
import { NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

const infoStyle={
  paddingTop: 10,
  paddingLeft: 4,
  flex: 1,
  maxWidth: 80,
  textTransform: 'capitalize',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const MobNavItems = ({ imagePreviewUrl, profileName, changePassword, signOut, history }) => {

  return(
    <React.Fragment>
      <NavItem>
        <div className="user" style={{display:'flex', cursor:'pointer'}} onClick={() => history.push('/user/profile')}>
          <div className="photo" style={{height:34, width:34}}>
            <img src={imagePreviewUrl} height={34} alt="Avatar"/>
          </div>
          <div className="info" style={infoStyle}>
            <div style={{color:'#5f6368'}}>
              {profileName}
            </div>
          </div>
        </div>
      </NavItem>
      <NavItem>
        <div title="Change Password" className="nav-link"  onClick={changePassword}>
          <p>
            <span className="d-lg-none d-md-block">Change Password</span>
          </p>
        </div>
      </NavItem>
      <NavItem>
        <div title="Sign out" className="nav-link"  onClick={signOut}>
          <p>
            <span className="d-lg-none d-md-block">Sign out</span>
          </p>
        </div>
      </NavItem>
    </React.Fragment>
  );
};

MobNavItems.propTypes = {
  creditPoints: PropTypes.string,
  imagePreviewUrl: PropTypes.string,
  profileName: PropTypes.string,
  changePassword: PropTypes.func,
  signOut: PropTypes.func,
  dropdownToggle: PropTypes.func,
  dropdownOpen: PropTypes.bool,
  history: PropTypes.object,
};

export default MobNavItems;