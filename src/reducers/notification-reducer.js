import { ADD_ALERT, REMOVE_ALERT } from 'actions/types';

const initialState = {
  alerts: [],
};

const notificataionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.alert]
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: [...state.alerts].filter(a => a.id !== action.id)
      };
    default:
      return state;
  }
};

export default notificataionReducer;