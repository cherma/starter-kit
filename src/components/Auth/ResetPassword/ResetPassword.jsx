import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common-components/CustomButton';
import { Card, CardBody, Form, Container, Col, CardFooter } from 'reactstrap';
import FormInput from 'components/common-components/FormInput';
import { validatePassword } from 'utils/field-validators';
import { authPath } from 'constants/router-constants';
import L from 'utils/localization';
import './ResetPassword.style.scss';

const ResetPassword = ({ resetPassword, validateId, goToPage, disableButton }) => {
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState('');
  const idValue = new URL(window.location.href).searchParams.get('id');

  useEffect(()=>{
    if(idValue) {
      validateId(idValue);
    } else {
      goToPage(authPath.login);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const blurHandler = (e, data, error) => {
    setPassword(data);
    setPasswordError(error);
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
      resetPassword(idValue, password);
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
                  validations={['new', 'password']}
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
                  {L.t('Auth.resetPassword.cta')}
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