import { UPDATE_ACTIVATE_ACCOUNT, SUBMIT_ACTION, UPDATE_AUTH_LOADER, UPDATE_SIGNUP_RESPONSE, FLUSH_ALL } from 'actions/types';

const initialState = {
  userActivation: '',
  isProfileChange: null,
  disableButton: false,
  isLoading: false,
  signup: {
    registedEmail: false,
    registedPhone: false
  }
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
      disableButton: action.state
    };

    case UPDATE_AUTH_LOADER: return {
      ...state,
      isLoading: action.status
    };

    case UPDATE_SIGNUP_RESPONSE: {
      const { signup } = state;
      Object.assign(signup, action.data);
      return {
        ...state,
        signup
      };
    }

    case FLUSH_ALL: {
      return {
        userActivation: '',
        isProfileChange: null,
        disableButton: false,
        isLoading: false,
        signup: {
          registedEmail: false,
          registedPhone: false
        }
      };
    }

    default: return state;

  }
};

export default authReducer;