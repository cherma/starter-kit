import React, { useState }  from 'react';
import { Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CollapseMenu = ({key, avatar, profileName, child}) =>{
  const [expand, setExpand] = useState(false);

  return(<div key={key} className="user">
    <div className="photo">
      <img src={avatar} alt="Avatar"/>
    </div>
    <div className="info">
      <a href={'javascript:void(0);'} data-toggle="collapse" aria-expanded={expand} onClick={() => setExpand(!expand)}>
        <span>{profileName}
          <b className="caret"></b>
        </span>
      </a>
      <Collapse isOpen={expand}>
        <ul className="nav" style={{marginTop:20}}>
          {
            child.views.map((prop,key) => {
              if(prop.redirect)
                return null;
              return (
                <li key={key}>
                  <NavLink to={child.path} activeClassName="active">
                    <span className="sidebar-mini-icon">{child.mini}</span>
                    <span className="sidebar-normal">{child.name}</span>
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
      </Collapse>
    </div>
  </div>);
};

CollapseMenu.propTypes = {
  key: PropTypes.number,
  avatar: PropTypes.string,
  profileName: PropTypes.string,
  child: PropTypes.object,
};

export default CollapseMenu;