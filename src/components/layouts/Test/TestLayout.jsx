import React from 'react';
// javascript plugin used to create scrollbars on windows
import { connect } from 'react-redux';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import testRoutes from '../../routes/test.jsx';
//import PerfectScrollbar from 'perfect-scrollbar';

//var ps;

class TestLayout extends React.Component{

  componentDidMount(){
    //ps = new PerfectScrollbar(this.refs.mainPanel);
  }
  componentWillUnmount(){
    //ps.destroy();
  }

  render(){
    const { loggedIn, activeExam } = this.props;

    return (
      <React.Fragment>
        { true || loggedIn && activeExam ?
          <div className="wrapper">
            <div className="main-panel full-test" ref="mainPanel">
              <Switch>
                {
                  testRoutes.map((prop,key) => {
                    return (
                      <Route path={prop.path}  component={prop.component} key={key}/>
                    );
                  })
                }
              </Switch>
            </div>
          </div>
          :
          <Redirect to={'/login'} />
        }
      </React.Fragment>
    );
  }
}

export default  connect(
  state => ({
    loggedIn: state.loggedIn,
    activeExam: state.activeExam
  })) (TestLayout);
