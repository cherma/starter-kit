import http from './http';

export const requestForgotPassword = (email, captcha) => {
  const formData  = new FormData();
  formData.append('email',email);
  formData.append('captcha',captcha);
  return http.post('/skilloptima/user/requestMailVerification', formData);
};