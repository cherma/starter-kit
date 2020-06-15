import React from 'react';
import { Button } from 'components/common-components/CustomButton';

const minimizeSidebar = () => {
  // eslint-disable-next-line no-undef
  document.body.classList.toggle('sidebar-mini');
};

const Header = () =>
  <div className="logo">
    <a href="/user/streams" className="simple-text logo-normal">
        SKILL OPTIMA
    </a>
    <div className="navbar-minimize">
      <Button simple neutral icon round id="minimizeSidebar" onClick={minimizeSidebar}>
        <i className="now-ui-icons text_align-center visible-on-sidebar-regular"></i>
        <i className="now-ui-icons design_bullet-list-67 visible-on-sidebar-mini"></i>
      </Button>
    </div>
  </div>;

export default Header;