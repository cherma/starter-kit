import { UPDATE_USER_INFO } from '../actions/types';

const initialState = {
  isLoggedIn: true,
  isAssessmentRunning: false,
  isAppLoading: true
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO: return {...state, ...action.userInfo};
    default: return state;
  }
};

export default userInfoReducer;