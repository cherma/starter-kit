import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import activationRoutes from '../../routes/activation.jsx';
let ps;

class ActivationLayout extends React.Component{
  componentDidMount(){
    ps = new PerfectScrollbar(this.refs.mainPanel);
  }
  componentWillUnmount(){
    ps.destroy();
  }
  render(){
    return (
      <div>

        <div className="main-panel full-test" ref="mainPanel">
          <Switch>
            {
              activationRoutes.map((prop,key) => {
                if(prop.redirect)
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                  );
                return (
                  <Route path={prop.path} component={prop.component}  key={key}/>
                );
              })
            }
          </Switch>

        </div>
      </div>
    );
  }
}

export default ActivationLayout;
