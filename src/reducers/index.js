import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import userInfoReducer from './user-info-reducer';
import markQuestionReducer from './mark-question-reducer';
import notificataionReducer from './notification-reducer';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  userInfo: userInfoReducer,
  markQuestions: markQuestionReducer,
  notification: notificataionReducer
});