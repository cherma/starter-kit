import { connect } from 'react-redux';
import { doLogin } from 'actions';

const mapDispatchToProps = dispatch => {
  return {
    doLogin: (email, password) => {
      dispatch(doLogin(email, password));
    }
  };
};

;

export default connect(
  null,
  mapDispatchToProps
);
