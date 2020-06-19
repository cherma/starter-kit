import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/now-ui-dashboard.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import * as serviceWorker from './serviceWorker';
//Redux Dependencies
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
