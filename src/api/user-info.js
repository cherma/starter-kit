import http from './http';

export const fetchUserInfoLogin = (email, password) => {
  return http.post('/skilloptima/user/getUserInfo', {}, {headers:{
    'Accept':'application/json',
    'Authorization': 'Basic ' + btoa(email + ':' + password)
  }}
  );
};

export const fetchUserInfo = () => {
  return http.post('/skilloptima/user/getUserInfo');
};