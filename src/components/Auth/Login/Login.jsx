import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, Form, Container, Col } from 'reactstrap';
import FormInput from 'components/common-components/FormInput';
import LoginFooter from './LoginFooter';
import LoginError from './LoginError';
import { validateEmail, validateEmptyField } from 'utils/field-validators';
import L from 'utils/localization';
import './Login.scss';
import newLogo from 'assets/img/so_logo.png';

const Login = ({ doLogin, isLoading }) => {

  const [field, setField] = useState({
    email: '', emailError: false, password: '', passwordError: false
  });

  const changeHandler = (event, source) => {
    const data = { ...field };
    data[source] = event.target.value;
    if(data.emailError || data.passwordError) {
      data.emailError = false;
      data.passwordError = false;
    }
    setField(data);
  };

  const blurHandler = (event, value, errorMsg, source) => {
    const data = { ...field };
    if(source === 'email') {
      data.emailError= errorMsg;
      data.email = event.target.value;
    } else {
      data.passwordError = errorMsg;
      data.password = event.target.value;
    }
    setField(data);
  };

  const keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      loginAccount();
    }
  };

  const loginAccount = () => {
    const { email, password} = field;
    const isValidEmail = validateEmail(email, false);
    const isValidPassword = validateEmptyField(password, L.t('Auth.login.errors.password'));

    if(!isValidEmail.error && !isValidPassword.error) {
      doLogin(email, password);
    } else {
      const data = {...field};
      data.passwordError = isValidPassword.message;
      data.emailError = isValidEmail.message;
      setField(data);
    }
  };


  return (
    <div className="login-page">
      <Container >
        <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
          <Form>
            <Card className="card-login card-plain">
              <CardBody>
                <div style={{textAlign:'center', margin: '1rem'}}>
                  <img src={newLogo} height={64} alt={'img'}/>
                </div>
                <FormInput
                  type={'email'}
                  autoFocus={true}
                  placeholder={'Email'}
                  changeCallback={changeHandler}
                  blurCallback={blurHandler}
                  keyDown={keyPressHandler}
                  iconClass={'now-ui-icons ui-1_email-85'}
                />
                <FormInput
                  type={'password'}
                  autoFocus={false}
                  validations={['empty']}
                  placeholder={'Password'}
                  changeCallback={changeHandler}
                  blurCallback={blurHandler}
                  keyDown={keyPressHandler}
                  iconClass={'now-ui-icons ui-1_lock-circle-open'}
                />
                <LoginError isLoading={isLoading} emailError={field.emailError} passwordError={field.passwordError} />
              </CardBody>
              <CardFooter>
                <LoginFooter isLoading={isLoading} buttonClick={loginAccount} />
              </CardFooter>
            </Card>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

Login.propTypes = {
  doLogin: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Login;
