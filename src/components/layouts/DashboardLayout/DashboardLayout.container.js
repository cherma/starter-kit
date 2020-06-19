import { connect } from 'react-redux';
import { signout } from 'actions';
import { getUserInfo } from 'utils/redux-selectors';

const mapStateToProps = (state) => {
  return {
    userInfo: getUserInfo(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);