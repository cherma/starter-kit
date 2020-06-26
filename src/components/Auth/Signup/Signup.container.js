import { connect } from 'react-redux';
import { createAccount, verifyPhone, verifyEmail, updateSignupResponse } from 'actions';
import { getSignupData, getButtonState, getRegistedEmail, getRegistedPhone } from 'utils/redux-selectors';

const mapStateToProps = (state) => {
  return {
    registedEmail: getRegistedEmail(state),
    registedPhone: getRegistedPhone(state),
    signupData: getSignupData(state),
    disableButton: getButtonState(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (data) => dispatch(createAccount(data)),
    checkPhone: (number) => dispatch(verifyPhone(number)),
    checkEmail: (email) => dispatch(verifyEmail(email)),
    updateReducer: (data) => dispatch(updateSignupResponse(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);

