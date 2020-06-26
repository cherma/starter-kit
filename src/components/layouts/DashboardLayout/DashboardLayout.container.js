import { connect } from 'react-redux';
import { signout } from 'actions';
import { getUserInfo } from 'utils/redux-selectors';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => {
  return {
    userInfo: getUserInfo(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signout()),
    goToPage: (page) => dispatch(push(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);