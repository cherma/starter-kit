import { connect } from 'react-redux';
import { getAuthDetails } from 'utils/redux-selectors';
import { activateAccount } from 'actions/auth-creator';

const mapStatToProps = (state) => {
  return{
    authDetails: getAuthDetails(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activateAccount: (uuid) => dispatch(activateAccount(uuid))
  };
};

export default connect(mapStatToProps, mapDispatchToProps);