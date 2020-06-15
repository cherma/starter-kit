import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import PerfectScrollbar from 'perfect-scrollbar';
import {
  Switch,
  Redirect
} from 'react-router-dom';

import { Header, Sidebar } from 'components';
//import {Services} from '../../Services/Services.jsx';
import dashboardRoutes from 'routes/dashboard.jsx';
import PrivateRoute from 'routes/PrivateRoute';
let ps=null;

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      redirect:false,
    };
  }
  componentDidMount(){
    if(!this.props.location.pathname.includes('testHistory') &&
        !this.props.location.pathname.includes('resultReview')
    )
      ps = new PerfectScrollbar(this.refs.mainPanel);
  }
  componentWillUnmount(){
    ps.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location.pathname.includes('testHistory') ||
        nextProps.location.pathname.includes('resultReview')) {
      if(ps) {
        ps.destroy();
      }
    } else {
      if(ps === null || ps.element === null) {
        ps = new PerfectScrollbar(this.refs.mainPanel);
      }
    }
  }

  render(){
    let routeValue=[];
    routeValue = dashboardRoutes.filter((value)=>
      (value.name!=='resultReview' && value.name!=='reviewPage' && value.name!=='changePassword'));
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={routeValue}/>
        <div className="main-panel" ref="mainPanel">
          <Header {...this.props}/>
          <Switch>
            {
              dashboardRoutes.map((prop,key) => {
                if(prop.collapse){
                  return prop.views.map((prop2,key2) => {
                    return (
                      <PrivateRoute allowUrl={this.props.loggedIn} path={prop2.path} redirectroute={this.state.redirect} component={prop2.component} key={key2}/>
                    );
                  });
                }
                if(prop.redirect)
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                  );
                return (
                  <PrivateRoute
                    allowUrl={this.props.loggedIn}
                    path={prop.path}
                    activeStream={this.props.activeStream} component={prop.component} key={key}/>
                );
              })
            }
          </Switch>
          <footer className={'footer' + (this.props.default ? ' footer-default':'')}>
            <Container fluid={this.props.fluid ? true:false}>
              <div className="copyright">
                            &copy;2018, All rights reserved by skilloptima Pvt Ltd.
              </div>
            </Container>
          </footer>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    loggedIn: state.loggedIn,
    activeStream: state.activeStream
  })) (Dashboard);