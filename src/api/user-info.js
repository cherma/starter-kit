import http from './http';

export const fetchUserInfo = () => {
  return http.post('/user/getUserInfo', {});
};