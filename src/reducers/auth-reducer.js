import { UPDATE_ACTIVATE_ACCOUNT, SUBMIT_ACTION, UPDATE_AUTH_LOADER } from 'actions/types';

const initialState = {
  userActivation: '',
  isProfileChange: null,
  disableButton: false,
  isLoading: false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_ACTIVATE_ACCOUNT: return {
      ...state,
      userActivation: action.message,
      isProfileChange: action.isProfileChange,
      isLoading: action.isLoading
    };

    case SUBMIT_ACTION: return {
      ...state,
      disableButton: action.status
    };

    case UPDATE_AUTH_LOADER: return {
      ...state,
      isLoading: action.status
    };

    default: return state;

  }
};

export default authReducer;