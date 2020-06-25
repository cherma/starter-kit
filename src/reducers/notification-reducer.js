import { ADD_ALERT, REMOVE_ALERT, ADD_NOTIFICATION } from 'actions/types';

const initialState = {
  alerts: [],
  notification:[]
};

const notificationReducer = (state = initialState, action) => {
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
    case ADD_NOTIFICATION:{
      const notification = {...action.notification};
      notification.id = Math.floor(Math.random() * 100);
      return {
        ...state,
        notification: [{...notification}]
      };
    }
    default:
      return state;
  }
};

export default notificationReducer;