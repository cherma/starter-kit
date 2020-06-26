import { UPDATE_USER_INFO, FLUSH_ALL } from '../actions/types';

const initialState = {
  isLoggedIn: false,
  isAssessmentRunning: false,
  isAppLoading: true,
  activeStream: '058d7406-2057-4e06-acb6-5f192c4d0fa6'
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO: return {...state, ...action.userInfo};

    case FLUSH_ALL: return {
      isLoggedIn: false,
      isAssessmentRunning: false,
      isAppLoading: false,
      activeStream: ''
    };
    default: return state;
  }
};

export default userInfoReducer;