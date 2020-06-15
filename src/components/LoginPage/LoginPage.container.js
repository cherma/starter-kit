import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps=(dispatch)=>{
  return{
    updateDashboard:(profileName, credits, status,logoUrl, shortName)=>{
      dispatch({
        type:'DASHBOARD_UPDATE',
        profileName,
        creditPoints:credits,
        userStatus: status,
        logoUrl,
        shortName
      });
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps);