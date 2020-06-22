import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Form, Container, Col } from 'reactstrap';
import FormInput from 'components/common-components/FormInput';
import LoginFooter from './LoginFooter';
import LoginError from './LoginError';
import { validateEmail, validateEmptyField } from 'utils/field-validators';
import PropTypes from 'prop-types';
import './Login.scss';
import newLogo from 'assets/img/so_logo.png';


const loginHandler = (email, password, emailError, passwordError, doLogin, setPasswordMsg) => {
  if (emailError === '' && passwordError === '' && password) {
    doLogin(email,password);
  } else if(!password) {
    setPasswordMsg('Invalid Password');
  }
};

const blurHandler = (e, data, errorMsg, setData, setErrorMsg) => {
  if (data !== '' && !e.relatedTarget) {
    setData(data);
    setErrorMsg(errorMsg);
  }
};

const changeHandler = (target, emailError, passwordError, setEmailMsg, setPasswordMsg) => {
  if(target === 'email' && emailError) {
    setEmailMsg('');
    setPasswordMsg('');
  } else if(target === 'password' && passwordError) {
    setPasswordMsg('');
  }
};


const keyPressHandler = (event, ref, email, password, emailError, passwordError, doLogin, setEmailMsg, setPasswordMsg, setEmail) => {
  if(event.keyCode === 13){
    switch(ref) {
      case 'email' : {
        const isValidMail = validateEmail(event.target.value);
        if(isValidMail.message === '' && passwordError === '' && password) {
          doLogin(event.target.value, password);
        } else {
          if(isValidMail.message)
            setEmailMsg(isValidMail.message);
          else
            setPasswordMsg('Invalid Password');
        }
        break;
      }
      case 'password' : {
        const isValidPassword = validateEmptyField(event.target.value, 'Invalid Password');
        if(isValidPassword.message === '' && emailError === '') {
          doLogin(email, event.target.value);
        } else {
          setPasswordMsg(isValidPassword.message);
        }
        break;
      }
      default: break;

    }
  }
};

const Login = ({ doLogin, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailMsg] = useState('');
  const [passwordError, setPasswordMsg] = useState('');
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
                  changeCallback={() => changeHandler('email', emailError, passwordError, setEmailMsg, setPasswordMsg )}
                  blurCallback={(e, data, errorMsg) => blurHandler(e, data, errorMsg, setEmail, setEmailMsg)}
                  keyDown={ e => keyPressHandler(e, 'email', email, password, emailError, passwordError, doLogin, setEmailMsg, setPasswordMsg, setEmail)}
                  iconClass={'now-ui-icons ui-1_email-85'}
                />
                <FormInput
                  type={'password'}
                  autoFocus={false}
                  validations={['empty']}
                  placeholder={'Password'}
                  changeCallback={() => changeHandler('password', emailError, passwordError, setEmailMsg, setPasswordMsg )}
                  blurCallback={(e, data, errorMsg) => blurHandler(e, data, errorMsg, setPassword, setPasswordMsg)}
                  iconClass={'now-ui-icons ui-1_lock-circle-open'}
                  keyDown={ e => keyPressHandler(e, 'password', email, password, emailError, passwordError, doLogin,  setEmailMsg, setPasswordMsg)}
                />
                <LoginError isLoading={isLoading} emailError={emailError} passwordError={passwordError} email={email}/>
              </CardBody>
              <CardFooter>
                <LoginFooter
                  buttonClick={() =>
                    loginHandler(
                      email,
                      password,
                      emailError,
                      passwordError,
                      doLogin,
                      setPasswordMsg
                    )
                  }
                />
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
