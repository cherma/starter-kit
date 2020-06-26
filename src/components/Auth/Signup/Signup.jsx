import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardBody, CardFooter } from 'reactstrap';
import ValidationField from 'components/common-components/ValidationField';
import Button from 'components/common-components/CustomButton';
import ReCAPTCHA from 'react-google-recaptcha';
import { validateEmail, validateEmptyField, validatePassword, validatePhone } from 'utils/field-validators';
import ContentSection from './ContentSection';
import L from 'utils/localization';
import './Signup.style.scss';
import { Link } from 'react-router-dom';
import { authPath } from 'constants/router-constants';


const Signup = ({ sitekey, disableButton, checkPhone, checkEmail, registedEmail, registedPhone, updateReducer }) => {

  const [fields, setFieldData] = useState({
    firstName: '', lastName: '', email: '', password: '',firstNameError: '', lastNameError: '', emailError: '', passwordError: '', phone: '', phoneError: '',
    firstNameIsError: false, lastNameIsError: false, emailIsError: false, passwordIsError: false, phoneIsError: false
  });
  const [captcha, setCaptcha] = useState({
    captcha: '',
    isInvalidCaptcha: false
  });


  useEffect(()=>{
    const data = {...fields};
    if(registedEmail) {
      data.emailIsError = true;
      data.emailError = registedEmail;
      setFieldData(data);
    } else if(registedPhone) {
      data.phoneIsError = true;
      data.phoneError = registedPhone;
      setFieldData(data);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[registedEmail, registedPhone]);

  const handleCaptchaChange = captcha => {
    setCaptcha({
      captcha,
      isInvalidCaptcha: false
    });
  };


  const keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      signupAccount();
    }
  };

  const blurHandler = (event, source, message) => {
    if(event.relatedTarget) {
      const data = {...fields};
      data[source] = event.target.value;
      if(message){
        data[`${source}Error`] = message;
        data[`${source}IsError`] = true;
      } else {
        if(source === 'email') {
          checkEmail(event.target.value);
        } else if (source === 'phone') {
          const splitNumberAndCode = event.target.value.split(' ');
          const actualNumber = splitNumberAndCode.length === 2 ? splitNumberAndCode[1] : '';
          checkPhone(actualNumber.replace(/\D/g, ''));
        }
      }
      setFieldData(data);
    }
  };

  const changeHandler = (event, source) => {
    const data = {...fields};
    data[source] = event.target.value;
    data[`${source}IsError`] = false;
    if(source === 'email' && !!registedEmail) {
      updateReducer({registedEmail: false});
    } else if(source === 'phone' && !!registedPhone) {
      updateReducer({registedPhone: false});
    }
    setFieldData(data);
  };

  const setErrorsOnSubmit = (isFirstNameValid, isLastNameValid, isEmailValid, isPasswordValid, isCaptchaValid, isPhoneValid) => {
    const data = {...fields};
    if(isFirstNameValid.error) {
      data.firstNameIsError = true;
      data.firstNameError = isFirstNameValid.message;
    }
    if(isLastNameValid.error) {
      data.lastNameIsError = true;
      data.lastNameError = isLastNameValid.message;
    }
    if(isEmailValid.error)  {
      data.emailIsError = true;
      data.emailError = isEmailValid.message;
    }
    if(isPasswordValid.error) {
      data.passwordIsError = true;
      data.passwordError = isPasswordValid.message;
    }
    if(isPhoneValid.error) {
      data.phoneIsError = true;
      data.phoneError = isPhoneValid.message;
    }
    if(isCaptchaValid.error) {
      setCaptcha({
        captcha: '',
        isInvalidCaptcha: true
      });
    }
    setFieldData(data);
  };

  const signupAccount = () => {
    const { firstName, lastName, email, password, phone } = fields;
    const splitNumberAndCode = phone.split(' ');
    const actualNumber = splitNumberAndCode.length === 2 ? splitNumberAndCode[1] : '';
    const isFirstNameValid = validateEmptyField(firstName, L.t('Auth.signup.errors.firstName'));
    const isLastNameValid = validateEmptyField(lastName, L.t('Auth.signup.errors.lastName'));
    const isEmailValid = validateEmail(email, false);
    const isPasswordValid = validatePassword(password, false);
    const isPhoneValid = validatePhone(actualNumber, false);
    const isCaptchaValid = captcha.captcha ?
      { error: false, message: ''} :
      { error: true, message: L.t('Auth.signup.errors.captcha') };

    if(isCaptchaValid.error && !isPhoneValid.error && !isFirstNameValid.error && !isLastNameValid.error && !isEmailValid.error && !isPasswordValid.error){
      alert('Make Api');
    } else {
      setErrorsOnSubmit(isFirstNameValid, isLastNameValid, isEmailValid, isPasswordValid, isCaptchaValid, isPhoneValid);
    }

  };

  return(
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center">
          { false && <Col lg={5} md={8} xs={12} className="mt-5">
            <ContentSection />
          </Col>}
          <Col lg={6} md={8} xs={12}>
            <Card>
              <CardBody>
                <ValidationField name={'firstName'} placeholder={'First Name'}
                  autoFocus={true}
                  errorMessage={fields.firstNameError}
                  showError={fields.firstNameIsError}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler}  />

                <ValidationField name={'lastName'} placeholder={'Last Name'}
                  showError={fields.lastNameIsError}
                  errorMessage={fields.lastNameError}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler} />

                <ValidationField name={'phone'} type={'phone'}
                  errorMessage={fields.phoneError}
                  showError={fields.phoneIsError}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler}/>

                <ValidationField  name={'email'} type={'email'} placeholder={'Email'}
                  errorMessage={fields.emailError}
                  showError={fields.emailIsError}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler} />

                <ValidationField name={'password'} type={'password'} placeholder={'Password'}
                  errorMessage={fields.passwordError}
                  showError={fields.passwordIsError}
                  validations={['new']}
                  changeCallback={changeHandler}
                  keyDownCallback={keyPressHandler}
                  blurCallback={blurHandler}/>

                <ReCAPTCHA
                  className="signup-page__captcha"
                  theme="light"
                  sitekey={sitekey}
                  onChange={handleCaptchaChange}
                />
                <div className="signup-page__captcha--error text-danger">
                  <span>{captcha.isInvalidCaptcha && L.t('Auth.signup.errors.captcha')}</span>
                </div>

                <div className="signup-page__terms">
                  {L.t('Auth.signup.content.terms')}
                  <Link to={authPath.termsAndCond}>{L.t('Auth.signup.content.termsLink')}</Link>
                </div>

              </CardBody>

              <CardFooter className="signup-page__cta">
                <Button color="primary" size="lg"
                  disabled={disableButton} round  onClick={signupAccount}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

Signup.propTypes = {
  sitekey: PropTypes.string,
  disableButton: PropTypes.bool,
  checkPhone: PropTypes.func,
  checkEmail: PropTypes.func,
  registedEmail: PropTypes.oneOfType(
    PropTypes.bool,
    PropTypes.string
  ),
  registedPhone: PropTypes.oneOfType(
    PropTypes.bool,
    PropTypes.string
  ),
  updateReducer: PropTypes.func
};

export default Signup;