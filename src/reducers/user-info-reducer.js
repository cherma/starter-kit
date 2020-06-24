import { UPDATE_USER_INFO } from '../actions/types';

const initialState = {
  isLoggedIn: true,
  isAssessmentRunning: true,
  isAppLoading: true,
  activeStream: '058d7406-2057-4e06-acb6-5f192c4d0fa6'
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO: return {...state, ...action.userInfo};
    default: return state;
  }
};

export default userInfoReducer;