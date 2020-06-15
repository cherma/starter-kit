import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, Nav, Container
} from 'reactstrap';


class PagesHeader extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.activeRoute.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }
  render(){
    return (
      <Navbar expand="lg" className={this.state.isOpen ? 'bg-white navbar-absolute':'navbar-transparent navbar-absolute'}>
        <Container>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </NavbarToggler>
            </div>
            <Link to="/" className="navbar-brand">Skill optima</Link>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>


            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesHeader;
