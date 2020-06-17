import { connect } from 'react-redux';
import { signout } from 'actions';
const mapStateToProps = (state) => {
  return {
    creditPoints:state.creditPoints,
    profileName:state.profileName,
    imagePreviewUrl:state.imagePreviewUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);