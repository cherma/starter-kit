import { connect } from 'react-redux';
import { getButtonState } from 'utils/redux-selectors';
import { resetPassword, validateId } from 'actions';
import { push } from 'connected-react-router';

const mapStateToProps = state => {
  return {
    disableButton: getButtonState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: (uuid, password) => dispatch(resetPassword(uuid,password)),
    validateId: (uuid) => dispatch(validateId(uuid)),
    goToPage: (page) => dispatch(push(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);