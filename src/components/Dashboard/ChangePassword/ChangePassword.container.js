import { connect } from 'react-redux';
import { showAlert } from 'actions/notification-creators';

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (args) => showAlert(args)(dispatch)
  };
};

export default connect(null, mapDispatchToProps);