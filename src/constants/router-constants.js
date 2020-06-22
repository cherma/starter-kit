export const authPath = {
  login: '/Login',
  signup: '/Register',
  forgotPassword: '/forgot-password',
  activateAccount: '/activation',
  resetPassword: '/resetpassword'
};

export const dashboardPath = {
  profile: '/user/profile',
  markQuestion: '/user/mark-questions',
  wrongQuestion: '/user/wrong-questions',
  testHistory: '/user/test-history',
  changePassword: '/user/change-password'
};


export const dashboard = [
  { image: true, path: '/user/profile', name: 'Profile', icon:'design_image'},
  { path: '/user/stream', name: 'Streams', icon: 'files_paper', },
  { path: dashboardPath.testHistory, name: 'Test History', icon: 'files_single-copy-04'},
  { path: dashboardPath.markQuestion, name: 'Mark Questions', icon: 'location_bookmark'},
  { path: dashboardPath.wrongQuestion, name: 'Wrong Questions', icon: 'ui-1_simple-remove'},
  { path: dashboardPath.changePassword, name: 'Change Password', icon: 'media-2_sound-wave'},
];