import React from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Container,Badge
} from 'reactstrap';
import { connect } from 'react-redux';
import dashboardRoutes from 'routes/dashboard.jsx';
import '../../assets/css/demo.css';
import {Services} from '../../Services/Services.jsx';
import {detectmob} from '../../helpers/utils';
import $ from 'jquery';

const infoStyle={
  paddingTop: 10,
  paddingLeft: 4,
  flex: 1,
  maxWidth: 80,
  textTransform: 'capitalize',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: 'transparent'
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.changePassword=this.changePassword.bind(this);
    this.signOut=this.signOut.bind(this);
  }
  toggle() {
    if(this.state.isOpen){
      this.setState({
        color: 'transparent'
      });
    } else {
      this.setState({
        color: 'white'
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e){
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  getBrand(){
    let name;
    dashboardRoutes.map((prop,key) => {
      if(prop.collapse){
        prop.views.map((prop,key) => {
          if(prop.path === this.props.location.pathname){
            name = prop.name;
          }
          return null;
        });
      } else {
        if(prop.redirect){
          if(prop.path === this.props.location.pathname){
            name = prop.name;
          }
        }else{
          if(prop.path === this.props.location.pathname){
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  openSidebar(){
    document.documentElement.classList.toggle('nav-open');
    this.refs.sidebarToggle.classList.toggle('toggled');
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor(){
    if(window.innerWidth < 993 && this.state.isOpen){
      this.setState({
        color: 'white'
      });
    } else {
      this.setState({
        color: 'transparent'
      });
    }

  }
  componentDidMount(){
    window.addEventListener('resize', this.updateColor.bind(this));
    if(detectmob()) {
      $(document).click((e) => {
        const container = $('.navbar-toggler');
        const innerContainer = $('.navbar-toggler-bar');
        if ( !(container.is(e.target) || innerContainer.is(e.target)) )   // if the target of the click isn't the TOGGLE BUTTON...
        {

          this.setState({isOpen:false, color: 'transparent'});

          document.documentElement.classList.remove('nav-open');
          this.refs.sidebarToggle&&this.refs.sidebarToggle.classList.remove('toggled');
        }
      });
    }

  }

  componentWillUnmount(){
    $(document).unbind();
  }
  componentWillReceiveProps(nextProps){
    this.setState({avatar:nextProps.imagePreviewUrl});
  }
  componentDidUpdate(e){
    if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
      document.documentElement.classList.toggle('nav-open');
      this.refs.sidebarToggle.classList.toggle('toggled');
    }
  }
  changePassword(e) {
    this.props.history.push('/user/changePassword');
    this.setState({isOpen:false, color: 'transparent'});
  }

  switchAccount(e) {
    this.props.history.push('/user/switchAccount');
    this.setState({isOpen:false, color: 'transparent'});
  }
  signOut(e){
    const data=Services.signOut();
    data.then((response) => {
      if(response.status === 'success') {
        this.props.signout({loggingIn:false});
        this.props.history.push('/Login');
      }
    });
  }
  render(){
    return (
    // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={this.props.location.pathname.indexOf('full-screen-maps') !== -1 ? 'white':this.state.color} expand="lg"
        className={
          this.props.location.pathname.indexOf('full-screen-maps') !== -1 ?
            'navbar-absolute fixed-top':'navbar-absolute fixed-top ' + (this.state.color === 'transparent' ? 'navbar-transparent ':'')}>
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" ref="sidebarToggle" className="navbar-toggler" onClick={() => this.openSidebar()}>
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <NavbarBrand style={{cursor:'pointer'}}>{this.getBrand()}</NavbarBrand>
          </div>
          {
            detectmob() && !this.state.isOpen ?
              <div style={{position:'absolute', right: 90, top: 23}}>
                <i className="now-ui-icons sport_trophy"><Badge id="badge-style" color="secondary">{this.props.creditPoints}</Badge></i></div>
              : null
          }
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar className="justify-content-end">
            <Nav navbar>


              {detectmob() ?
                <React.Fragment>
                  <NavItem>
                    <div className="user" style={{display:'flex', cursor:'pointer'}} onClick={() =>this.props.history.push('/user/profile')}>
                      <div className="photo" style={{height:34, width:34}}>
                        <img src={this.props.imagePreviewUrl} height={34} alt="Avatar"/>
                      </div>
                      <div className="info" style={infoStyle}>
                        <a style={{color:'#5f6368'}}>
                          {this.props.profileName}
                        </a>
                      </div>
                    </div>
                  </NavItem>

                  <NavItem>
                    <a title="Switch Account" className="nav-link"  onClick={(e)=>this.switchAccount(e)}>

                      <p>
                        <span className="d-lg-none d-md-block">Switch Account</span>
                      </p>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a title="Change Password" className="nav-link"  onClick={(e)=>this.changePassword(e)}>

                      <p>
                        <span className="d-lg-none d-md-block">Change Password</span>
                      </p>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a title="Sign out" className="nav-link"  onClick={(e)=>this.signOut(e)}>

                      <p>
                        <span className="d-lg-none d-md-block">Sign out</span>
                      </p>
                    </a>
                  </NavItem>
                </React.Fragment>
                :
                <React.Fragment>
                  <NavItem>
                    <a title="Trophies" className="nav-link">
                      <i className="now-ui-icons sport_trophy"><Badge id="badge-style" color="secondary">{this.props.creditPoints}</Badge></i>
            						<p>
                        <span className="d-lg-none d-md-block">Trophies</span>
                      </p>
                    </a>
                  </NavItem>
                  <Dropdown title="Options" nav isOpen={this.state.dropdownOpen} toggle={(e) => this.dropdownToggle(e)}>
                    <DropdownToggle caret nav>
                      <i className="now-ui-icons location_world"></i>
                      <p>
            							<span className="d-lg-none d-md-block">options</span>
            						</p>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <div className="user" style={{display:'flex', cursor:'pointer'}} onClick={() =>this.props.history.push('/user/profile')}>
                          <div className="photo" style={{height:34, width:34}}>
                            <img src={this.props.imagePreviewUrl} height={34} alt="Avatar"/>
                          </div>
                          <div className="info" style={infoStyle}>
                            <a style={{color:'#5f6368'}}>
                              {this.props.profileName}
                            </a>
                          </div>
                        </div>
                      </DropdownItem>
                      <DropdownItem tag="a" style={{ cursor: 'pointer',color:'#5f6368' }} onClick={(e)=>this.switchAccount(e)}>Switch Account</DropdownItem>

                      <DropdownItem tag="a" style={{ cursor: 'pointer',color:'#5f6368' }} onClick={(e)=>this.changePassword(e)}>Change Password</DropdownItem>
                      <DropdownItem tag="a" style={{ cursor: 'pointer',color:'#5f6368' }} onClick={(e)=>this.signOut(e)}>Sign out</DropdownItem>
                    </DropdownMenu>

                  </Dropdown>
                </React.Fragment>
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    creditPoints:state.creditPoints,
    profileName:state.profileName,
    imagePreviewUrl:state.imagePreviewUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: (value)=> {
      dispatch({
        type:'USER_AUTH',
        payload: value
      });
    }
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(Header);
