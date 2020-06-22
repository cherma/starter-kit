import { connect } from 'react-redux';
import { requestForgotPassword } from 'actions/auth-creator';

const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: (email, captcha) => dispatch(requestForgotPassword(email, captcha))
  };
};

export default connect(null, mapDispatchToProps);