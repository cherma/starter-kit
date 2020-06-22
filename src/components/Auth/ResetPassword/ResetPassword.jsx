import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common-components/CustomButton';
import { Card, CardBody, Form, Container, Col, CardFooter } from 'reactstrap';
import FormInput from 'components/common-components/FormInput';
import { validatePassword } from 'utils/field-validators';
import { authPath } from 'constants/router-constants';
import './ResetPassword.style.scss';

const ResetPassword = ({ resetPassword, validateId, goToPage, disableButton }) => {
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(()=>{
    const idValue = new URL(window.location.href).searchParams.get('id');
    if(idValue) {
      validateId(idValue);
    } else {
      goToPage(authPath.login);
    }
  },[]);

  const blurHandler = (e, data, error) => {
    if (data !== '' && !e.relatedTarget) {
      setPassword(data);
      setPasswordError(error);
    } else if( data === '') {
      setPassword(data);
    }
  };

  const changeHandler = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };


  const handleForgotPassword = () => {
    const validate = validatePassword(password);
    if(validate.error) {
      setPasswordError(validate.message);
    } else {
      resetPassword(password);
    }
  };

  const keyPressHandler = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      handleForgotPassword();
    }
  };

  return(
    <div className="reset-password">
      <Container>
        <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
          <Form>
            <Card className="card-login card-plain">
              <CardBody>
                <FormInput
                  type={'password'}
                  autoFocus={true}
                  placeholder={'Password'}
                  changeCallback={changeHandler}
                  blurCallback={(e, data, errorMsg) => blurHandler(e, data, errorMsg)}
                  iconClass={'now-ui-icons ui-1_lock-circle-open'}
                  keyDown={keyPressHandler}
                />
                <div className="reset-password--error text-danger">
                  <h6>{ passwordError }</h6>
                </div>
              </CardBody>
              <CardFooter>
                <Button color="primary" size="lg" disabled={disableButton}
                  block round onClick={handleForgotPassword} >
                Reset Password
                </Button>
              </CardFooter>
            </Card>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default ResetPassword;

ResetPassword.propTypes = {
  resetPassword: PropTypes.func,
  goToPage: PropTypes.func,
  validateId: PropTypes.func,
  disableButton: PropTypes.bool
};