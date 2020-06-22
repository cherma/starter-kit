import http from './http';

export const requestForgotPassword = (email, captcha) => {
  const formData  = new FormData();
  formData.append('email',email);
  formData.append('captcha',captcha);
  return http.post('/skilloptima/user/requestMailVerification', formData);
};

export const activateUserAccount = (uuid) => {
  const formData  = new FormData();
  formData.append('uuid',uuid);
  return http.post('/skilloptima/user/activateUser', formData);
};

export const validateResetPassword = (uuid) => {
  const formData  = new FormData();
  formData.append('uuid',uuid);
  return http.post('/skilloptima/user/validateId', formData);
};

export const requestResetPassword = (uuid, password) => {
  const formData  = new FormData();
  formData.append('password',password);
  formData.append('uuid',uuid);
  return http.post('/skilloptima/user/resetPassword', formData);
};