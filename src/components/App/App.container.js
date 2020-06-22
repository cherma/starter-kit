import { connect } from 'react-redux';
import { getUserInfo } from 'actions';
import { getIsLoggedIn, getIsAppLoading, getVisibleAlert } from 'utils/redux-selectors';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => {
  return {
    isAppLoading: getIsAppLoading(state),
    isLoggedIn: getIsLoggedIn(state),
    visibleAlert: getVisibleAlert(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setupApp:() => dispatch(getUserInfo()),
    goToPage: (page) => dispatch(push(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);