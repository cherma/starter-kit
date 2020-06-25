import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common-components/CustomButton';
import { Card, CardBody, Form, Container, Col, CardFooter } from 'reactstrap';
import FormInput from 'components/common-components/FormInput';
import ReCAPTCHA from 'react-google-recaptcha';
import { validateEmail } from 'utils/field-validators';
import './ForgotPassword.styles.scss';
import { renderIf } from 'utils/helper';

const ForgotPassword = ({ sitekey, forgotPassword, disableButton }) =>{
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState('');
  const [captcha, setCaptcha] = useState({
    captcha: '',
    isInvalidCaptcha: true
  });

  const blurHandler = (e, data, error) => {
    if (data !== '' && !e.relatedTarget) {
      setEmail(data);
      setEmailError(error);
    } else if( data === '') {
      setEmail(data);
    }
  };

  const changeHandler = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handleCaptchaChange = captcha => {
    setCaptcha({
      captcha,
      isInvalidCaptcha: !captcha
    });
  };

  const handleForgotPassword = () => {
    const validate = validateEmail(email);
    if(validate.error) {
      setEmailError(validate.message);
    } else if(captcha.isInvalidCaptcha) {
      setCaptcha({captcha:'', isInvalidCaptcha: 'Please check the check box'});
    } else {
      forgotPassword(email, captcha.captcha);
    }
  };

  const keyPressHandler = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      handleForgotPassword();
    }
  };

  return(<div className="forgot-password">
    <Container>
      <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
        <Form>
          <Card className="card-login card-plain">
            <CardBody>
              <FormInput
                type={'email'}
                autoFocus={true}
                placeholder={'Email'}
                changeCallback={changeHandler}
                blurCallback={(e, data, errorMsg) => blurHandler(e, data, errorMsg)}
                iconClass={'now-ui-icons ui-1_email-85'}
                keyDown={keyPressHandler}
              />
              <ReCAPTCHA
                className="forgot-password__captcha"
                theme="light"
                sitekey={sitekey}
                onChange={handleCaptchaChange}
              />
              <div className="forgot-password--error text-danger">
                <h6>{
                  renderIf(
                    () => emailError,
                    () => emailError,
                    () => captcha.isInvalidCaptcha
                  )
                }</h6>
              </div>
            </CardBody>
            <CardFooter>
              <Button color="primary" size="lg" block
                disabled={disableButton} round onClick={handleForgotPassword}>
              Next
              </Button>
            </CardFooter>
          </Card>
        </Form>
      </Col>
    </Container>
  </div>);
};

export default ForgotPassword;

ForgotPassword.propTypes = {
  sitekey: PropTypes.string,
  forgotPassword: PropTypes.func,
  disableButton: PropTypes.bool
};