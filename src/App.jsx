import React from 'react';
import './App.css';
import AuthLayout from './components/layouts/AuthLayout';
import { Switch, Route } from 'react-router';

const App = () => {

  return (
    <div className="skill-optima-app">
      <Switch>
        <Route path={'/'} component={AuthLayout} />
      </Switch>
    </div>
  );
};

export default App;
