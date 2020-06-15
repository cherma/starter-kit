export const layoutPaths = {
  postLogin: `/user`,
  preLogin: `/`,
};

export const preLogin = {
  login: `/login`,
  signup: `/signup`,
  forgotPassword: `/forgot-password`,
};

export const postLogin = {
  streams: `/user/streams`,
};

export const dashRoutes = [
  { collapse: true, path: `/pages`, name: `Pages`, state: `openPages`, icon:`design_image`, views:
  [{ path: `/user/profile`, name: `Profile`, mini: `P` }]
  },
  { path: `/user/stream`, name: `Streams`, icon: `files_paper`, },
  { path: `/user/test-history`, name: `Test History`, icon: `files_single-copy-04`},
  { path: `/user/mark-questions`, name: `Mark Questions`, icon: `location_bookmark`},
  { path: `/user/wrong-questions`, name: `Wrong Questions`, icon: `ui-1_simple-remove`},
  { path: `/user/statistics`, name: `Statistics`, icon: `media-2_sound-wave`},
];