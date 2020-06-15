import React, { useState } from 'react';
import { FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { validateEmail, validateEmptyField, validatePassword } from 'utils/field-validators';
import './FormInput.css';


const FormInput = ({ type, placeholder, autoFocus, iconClass, changeCallback, blurCallback, validations, theme, keyDown, errorMessage }) => {

  const blurHandler = (
    event,
    type,
    validations,
    setFocus,
    setError,
    blurCallback
  ) => {
    setFocus(false);
    const value = event.target.value;
    if(type === 'text'){
      const isValidPassword = validateEmptyField(value, 'Empty Field');
      setError(isValidPassword.error);
      blurCallback(value);
    } else if (type === 'email') {
      const isValidEmail = validateEmail(value);
      setError(isValidEmail.error);
      blurCallback(event, value, isValidEmail.message);
    } else if (type === 'password') {
      if (validations.includes('empty')) {
        const isValidPassword = validateEmptyField(value, 'Invalid Password');
        setError(isValidPassword.error);
        blurCallback(event, value, isValidPassword.message);
      }

      if (validations.includes('new')) {
        const isValidPassword = validatePassword(value);
        setError(isValidPassword.error);
        blurCallback(event, value, isValidPassword.message);
      }
    }
  };

  const focusHandler = (setFocus, setError, focusCallback) => {
    setError(false);
    setFocus(true);
  };

  const changeHandler = (event, changeCallback) => {
    changeCallback(event);
  };

  const [isFocused, setFocus] = useState(autoFocus);
  const [hasError, setError] = useState(false);
  return (
    <FormGroup className={hasError ? 'has-label has-danger '+ theme  : 'has-label '+ theme }>
      <InputGroup size={'lg'}>
        <InputGroupAddon
          addonType="prepend"
          className={
            isFocused ? 'custom-input-addon active ' + theme : 'custom-input-addon ' + theme
          }
        >
          <i className={iconClass} />
        </InputGroupAddon>
        <Input
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="new-password"
          className={
            isFocused ? 'custom-form-input active ' + theme : 'custom-form-input ' + theme
          }
          onBlur={e =>  blurHandler(e, type, validations, setFocus, setError, blurCallback, errorMessage)}
          onFocus={() => focusHandler(setFocus, setError)}
          onKeyDown={(e)=>keyDown(e)}
          onChange={(e) => changeHandler(e, changeCallback)}
        />
      </InputGroup>
    </FormGroup>
  );
};

FormInput.defaultProps = {
  changeCallback: () => {},
  keyDown: () => {},
  blurCallback: () => {},
  validations: [],
  theme: 'transparent',
};

export default FormInput;
