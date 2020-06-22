import { connect } from 'react-redux';
import { getActiveStream, getMarkedQuestionsDetails } from 'utils/redux-selectors';
import { fetchMarkedQuestions } from 'actions';

const mapStateToProps = (state) => {
  return {
    activeStream: getActiveStream(state),
    markedQuestionsData: getMarkedQuestionsDetails(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMarkedQuestion: (data, field, params) => dispatch(fetchMarkedQuestions(data, field, params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);