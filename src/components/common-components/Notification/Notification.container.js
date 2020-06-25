import { connect } from 'react-redux';
import { getNewNotification } from 'utils/redux-selectors';

const mapStateToProps = (state) => {
  return {
    newNotification: getNewNotification(state)
  };
};

export default connect(mapStateToProps, null);