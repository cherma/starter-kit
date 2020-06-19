export const getUserInfo = state => state.userInfo;
export const getIsLoggedIn = state => state.userInfo.isLoggedIn;
export const getIsAppLoading = state => state.userInfo.isAppLoading;

export const getQuestionData = state => state.question;
export const getIsLoading = state => state.loader.isLoading;
export const getStreams = state => state.streams.streams;