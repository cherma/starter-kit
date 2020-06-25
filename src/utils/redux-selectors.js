//Auth
export const getUserInfo = state => state.userInfo;
export const getIsLoggedIn = state => state.userInfo.isLoggedIn;
export const getIsAppLoading = state => state.userInfo.isAppLoading;
export const getActiveStream = state => state.userInfo.activeStream;
export const getAuthDetails = state => state.auth;
export const getButtonState = state => state.auth.disableButton;

//Dashboard => Markquestions
export const getMarkedQuestionsDetails = state => state.markQuestions;

//Alerts n Notifications
export const getVisibleAlert = (state) => (state.notification.alerts && state.notification.alerts.length > 0) ? state.notification.alerts[0] : null;
export const getNewNotification = (state) => (state.notification.notification && state.notification.notification.length > 0) ? state.notification.notification[0] : null;


export const getQuestionData = state => state.question;
export const getIsLoading = state => state.loader.isLoading;
export const getStreams = state => state.streams.streams;