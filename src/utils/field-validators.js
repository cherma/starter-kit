import L from './localization';

export const emailValidator = (value) => {
  const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value))
    return true;
  return false;
};

export const nullValidator = (value) => {
  return !(value === '' || value === null || value === undefined);
};

export const validateEmail = (value) => {
  const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = {};
  if (value.length === 0) {
    result.error = true;
    result.message = L.t('Signup.errors.email');
  } else if (emailRex.test(value)) {
    result.error = false;
    result.message = '';
  } else {
    result.error =(true);
    result.message = L.t('Signup.errors.email');
  }
  return result;
};

export const validateEmptyField = (value, errorMsg) => {
  const result = {};
  if (value.length === 0) {
    result.error = true;
    result.message = errorMsg;
  } else {
    result.error = false;
    result.message ='';
  }
  return result;
};

export const validatePassword = (value) => {
  const numberRegex = /\d/;
  const result = {};
  if (value.length < 6) {
    result.error = true;
    result.message = L.t('Signup.errors.passwordLength');
  } else if (!(value) || !numberRegex.test(value)) {
    result.error = true;
    result.message = L.t('Signup.errors.passwordReq');
  } else {
    result.error = false;
    result.message = '';
  }
  return result;
};