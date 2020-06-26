import { connect } from 'react-redux';
import { doLogin } from 'actions';
import { getButtonState } from 'utils/redux-selectors';

const mapStateToProps = state => {
  return {
    isLoading: getButtonState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doLogin: (email, password) => {
      dispatch(doLogin(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
