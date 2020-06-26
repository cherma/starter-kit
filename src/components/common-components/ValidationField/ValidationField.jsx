import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Input, InputGroup, FormGroup } from 'reactstrap';
import { validateEmail, validateEmptyField, validatePhone, validatePassword } from 'utils/field-validators';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './ValidationField.style.scss';
import { renderIf } from 'utils/helper';

const ValidationField = ({ name, type, validations, autoFocus, placeholder, showError, errorMessage, keyDownCallback, changeCallback, blurCallback }) => {
  const [hasError, setError] = useState({
    error: false,
    message: ''
  });
  const [value, setValue] = useState('');

  const blurHandler = (event, type) => {
    switch(type) {
      case 'email': {
        const isValidEmail = validateEmail(event.target.value);
        setError(isValidEmail);
        blurCallback(event, name, isValidEmail.message);
        break;
      }
      case 'text': {
        const isValidText = validateEmptyField(event.target.value);
        setError(isValidText);
        blurCallback(event, name);
        break;
      }
      case 'password': {
        if(validations.includes('new')) {
          const isValidPassword = validatePassword(event.target.value);
          setError(isValidPassword);
          blurCallback(event, name, isValidPassword.message);
        } else {
          const isValidPassword = validateEmptyField(event.target.value);
          setError(isValidPassword);
          blurCallback(event, name);
        }
        break;
      }
      default: break;
    }
  };

  const phoneBlurHandler = (event, data) => {
    const maskedValue = event.target.value.split(' ');
    const value = maskedValue.length === 2 ? maskedValue[1].replace(/\D/g, '') : '';
    const isValidPhone = validatePhone(value);
    setError(isValidPhone);
    blurCallback(event, name, isValidPhone.message);
  };

  const changeHandlerPhone = (value, data, event, formattedValue) => {
    hasError.error && setError({
      error: false,
      message: ''
    });
    setValue(value);
    changeCallback(event, name);
  };

  const changeHandler = (event) => {
    hasError.error && setError({
      error: false,
      message: ''
    });
    setValue(event.target.value);
    changeCallback(event, name);
  };

  const showErrorMessage = () => {
    if(showError) {
      return true;
    } else {
      if(value !== '' && hasError.error)
        return true;
      return false;
    }
  };

  return (
    <React.Fragment>
      {
        renderIf(
          () => type === 'phone',
          () => <FormGroup id="phn" className={`validation-field input-group ${ showErrorMessage() ? 'show-error has-danger' : '' } ${hasError.error ? 'has-danger' : ''}`}>
            <PhoneInput
              country="in"
              placeholder="Phone"
              disableDropdown={true}
              countryCodeEditable={false}
              onChange={(value, data, event, formattedValue)=>changeHandlerPhone(value, data, event, formattedValue)}
              onBlur={(event, data)=>phoneBlurHandler(event, data)}
              onKeyDown={(e)=>keyDownCallback(e)}
              className="so-register"
              name="phone"
            />
          </FormGroup>,
          () => <InputGroup className={`validation-field ${ showErrorMessage() ? 'show-error has-danger' : '' } ${hasError.error ? 'has-danger' : ''}`}>
            <Input
              autoFocus={autoFocus}
              placeholder={placeholder}
              type={type}
              onBlur={e => blurHandler(e, type)}
              onChange={changeHandler}
              onKeyDown={(e)=>keyDownCallback(e)}
            />
          </InputGroup>
        )}
      { showErrorMessage() && <span className="validation-field__error text-danger">{errorMessage}</span>}
    </React.Fragment>
  );
};

ValidationField.defaultProps = {
  changeCallback: () => {},
  keyDownCallback: () => {},
  blurCallback: () => {},
  validations: [],
  type: 'text',
  autoFocus: false
};

ValidationField.propTypes = {
  name: PropTypes.string,
  changeCallback: PropTypes.func,
  keyDownCallback: PropTypes.func,
  blurCallback: PropTypes.func,
  validations: PropTypes.array,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  autoFocus: PropTypes.bool
};

export default ValidationField;
