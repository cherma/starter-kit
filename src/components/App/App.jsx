import React, { Suspense } from 'react';
import Sidebar from 'components/Sidebar';
import PanelHeader from 'components/Header';
import PathOne from 'components/PathOne';
import PathTwo from 'components/PathTwo';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from 'components/Footer/Footer';

const App = ({location, history}) =><div className="app">
  <Sidebar/>
  <div className="main-panel">
    <div>
      <PanelHeader location={location} history={history} />
      <div>
        <div className="content">
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path={'/path-one'} component={PathOne} />
              <Route path={'/path-two'} component={PathTwo} />
            </Suspense>
          </Switch>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</div>;

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  history: PropTypes.object,
};
export default App;