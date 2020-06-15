import { UPDATE_USER_INFO } from '../actions/types';

const initialState = {
  isLoggedIn: false,
  isAssessmentRunning: false
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO: {
      if(action.userInfo){
        const newState = { ...action.userInfo };
        newState.isLoggedIn = true;
        return newState;
      } else {
        return state;
      }
    }
    default: return state;
  }
};

export default userInfoReducer;