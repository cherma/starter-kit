import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup } from 'reactstrap';
import ValidationField from 'components/common-components/ValidationField';
import Button from 'components/common-components/CustomButton';
import { validateEmail, validateEmptyField, validatePassword } from 'utils/field-validators';
import ContentSection from './ContentSection';
import L from 'utils/localization';
import './Signup.style.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Signup = () => {

  const [fields, setFieldData] = useState({
    firstName: '', lastName: '', email: '', password: '',emailError: '', passwordError: '',
    firstNameIsError: false, lastNameIsError: false, emailIsError: false, passwordIsError: false
  });


  const keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      signupAccount();
    }
  };

  const blurHandler = (event, source) => {
    const data = {...fields};
    data[source] = event.target.value;
    setFieldData(data);
  };

  const changeHandler = (event, source) => {
    const data = {...fields};
    data[source] = event.target.value;
    data[`${source}IsError`] = false;
    setFieldData(data);
  };

  const setErrorsOnSubmit = (isFirstNameValid, isLastNameValid, isEmailValid, isPasswordValid) => {
    const data = {...fields};
    if(isFirstNameValid.error) {
      data.firstNameIsError = true;
    }
    if(isLastNameValid.error) {
      data.lastNameIsError = true;
    }
    if(isEmailValid.error)  {
      data.emailIsError = true;
      data.emailError = isEmailValid.message;
    }
    if(isPasswordValid.error) {
      data.passwordIsError = true;
      data.passwordError = isPasswordValid.message;
    }
    setFieldData(data);
  };

  const signupAccount = () => {
    const { firstName, lastName, email, password } = fields;
    const isFirstNameValid = validateEmptyField(firstName, L.t('Auth.signup.errors.firstName'));
    const isLastNameValid = validateEmptyField(lastName, L.t('Auth.signup.errors.lastName'));
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if(!isFirstNameValid.error && !isLastNameValid.error && !isEmailValid.error && !isPasswordValid.error){
      alert('Make Api');
    } else {
      setErrorsOnSubmit(isFirstNameValid, isLastNameValid, isEmailValid, isPasswordValid);
    }

  };

  return(
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={8} xs={12} className="mt-5">
            <ContentSection />
          </Col>
          <Col lg={4} md={8} xs={12}>
            <Card>
              <CardBody>
                <ValidationField name={'firstName'} placeholder={'First Name'}
                  errorMessage={L.t('Auth.signup.errors.firstName')}
                  showError={fields.firstNameIsError}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler}  />

                <ValidationField name={'lastName'} placeholder={'Last Name'}
                  showError={fields.lastNameIsError}
                  errorMessage={L.t('Auth.signup.errors.lastName')}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler} />

                <ValidationField  name={'email'} type={'email'} placeholder={'Last Name'}
                  errorMessage={fields.emailError}
                  showError={fields.emailIsError}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler} />

                <ValidationField name={'password'} type={'password'} placeholder={'Password'}
                  errorMessage={fields.passwordError}
                  showError={fields.passwordIsError}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler}/>

                <FormGroup id="phn" className={'input-group has-label has-danger'}>
                  <PhoneInput
                    country="in"
                    placeholder="Phone"
                    disableDropdown={true}
                    countryCodeEditable={false}
                    className="so-register"
                    name="phone"
                  />
                </FormGroup>

                <Button onClick={signupAccount}>
                  Signup
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Signup;