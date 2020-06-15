import { combineReducers } from 'redux';
import userInfoReducer from './user-info-reducer';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  userInfo: userInfoReducer,
});