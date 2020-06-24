import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Input, InputGroup } from 'reactstrap';
import { validateEmail, validateEmptyField } from 'utils/field-validators';
import './ValidationField.style.scss';

const ValidationField = ({ name, type, validations, placeholder, showError, errorMessage, keyDownCallback, changeCallback, blurCallback }) => {
  const [hasError, setError] = useState({
    error: false,
    message: ''
  });
  const [value, setValue] = useState('');

  const blurHandler = (event, type, validations) => {
    switch(type) {
      case 'email': {
        const isValidEmail = validateEmail(event.target.value);
        setError(isValidEmail);
        blurCallback(event, name);
        break;
      }
      case 'text': {
        const isValidText = validateEmptyField(event.target.value, 'Empty Field');
        setError(isValidText);
        blurCallback(event, name);
        break;
      }
      case 'password': {
        blurCallback(event, name);
        break;
      }
    }
  };

  const changeHandler = (event) => {
    hasError && setError(false);
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
      <InputGroup className={`validation-field ${hasError.error ? 'has-danger' : ''}`}>
        <Input
          placeholder={placeholder}
          type={type}
          onBlur={e => blurHandler(e, type, validations)}
          onChange={changeHandler}
          onKeyDown={(e)=>keyDownCallback(e)}
        />
      </InputGroup>
      { showErrorMessage() && <span>{errorMessage}</span> }
    </React.Fragment>
  );
};

ValidationField.defaultProps = {
  changeCallback: () => {},
  keyDownCallback: () => {},
  blurCallback: () => {},
  validations: [],
  type: 'text',
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
  errorMessage: PropTypes.string
};

export default ValidationField;
