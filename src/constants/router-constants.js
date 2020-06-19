export const authPath = {
  login: '/Login',
  signup: '/Register',
  forgotPassword: '/auth/forgot-password',
};

export const dashboardPath = {
  profile: '/user/profile',
  markQuestion: '/user/mark-questions',
  wrongQuestion: '/user/wrong-questions',
  testHistory: '/user/test-history'
};


export const dashboard = [
  { collapse: true, path: '/pages', name: 'Pages', state: 'openPages', icon:'design_image', views:
  [{ path: dashboardPath.profile, name: 'Profile', mini: 'P' }]
  },
  { path: '/user/stream', name: 'Streams', icon: 'files_paper', },
  { path: dashboardPath.testHistory, name: 'Test History', icon: 'files_single-copy-04'},
  { path: dashboardPath.markQuestion, name: 'Mark Questions', icon: 'location_bookmark'},
  { path: dashboardPath.wrongQuestion, name: 'Wrong Questions', icon: 'ui-1_simple-remove'},
  { path: '/user/statistics', name: 'Statistics', icon: 'media-2_sound-wave'},
];