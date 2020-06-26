import http from './http';

export const checkExistingPhone = (number) => {
  const formData = new FormData();
  formData.append('phone', number);

  return http.post('/skilloptima/user/isExistingPhoneNumber', formData);
};

export const checkExistingEmail = (email) => {
  const formData = new FormData();
  formData.append('email', email);

  return http.post('/skilloptima/user/isExistingMail', formData);
};

export const registerUser = (data) => {
  const { firstname, lastName, phone, email, password, captcha} = data;
  const formData  = new FormData();
  formData.append('firstName',firstname);
  formData.append('lastName',lastName);
  formData.append('email',email);
  formData.append('phone',phone);
  formData.append('password',password);
  formData.append('userType','user');
  formData.append('country', 'India');
  formData.append('countryCode','IN');
  formData.append('captcha',captcha);

  return http.post('/skilloptima/user/registerUser', formData);
};

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