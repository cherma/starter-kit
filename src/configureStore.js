import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from 'reducers';
import rootSaga from 'sagas/root-saga';

export const history = createBrowserHistory();

const composeEnhancers =
  process.env !== 'prod' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
  // other store enhancers if any
);

export default function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    enhancer
  );
  sagaMiddleware.run(rootSaga);
  return store;
}