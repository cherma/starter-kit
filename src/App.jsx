import React from 'react';
import './App.css';
import AuthLayout from './components/layouts/AuthLayout';
import Dashboard from './components/layouts/Dashboard';
import { Switch, Route } from 'react-router';

const App = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route path={'/user'} component={Dashboard} />
        <Route path={'/'} component={AuthLayout} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
