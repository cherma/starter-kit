import { connect } from 'react-redux';
import { requestForgotPassword } from 'actions/auth-creator';
import { getButtonState } from 'utils/redux-selectors';

const mapStateToProps = (state) => {
  return {
    disableButton: getButtonState(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: (email, captcha) => dispatch(requestForgotPassword(email, captcha))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);