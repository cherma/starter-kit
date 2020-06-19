import React from 'react';
import { PanelHeader, Stream } from 'components';
import { Row, Col}  from 'reactstrap';
import { fetchFullTest } from 'Services/FullTestService';


class FullTest extends React.Component {

  constructor(props){
    super(props);
    this.state = {steam:[]};
  }

  componentDidMount() {
    fetchFullTest().then(response=> {
      const stream = response &&  response.streams.filter(stream => stream.fullTest);
      this.setState({stream});
    });

  }

  handleClick(key){
    this.props.history.push({pathname:'/user/take-mock-test',data:key});
  }

  render(){
    const {stream} = this.state;
    return(
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            {stream && stream.map((data) =>
              <Col  xs={12} sm={6} md={4} lg={this.props.sideBarShow ? 4 : 3} key={data.streamId}>
                <Stream key={data.streamId}  id={data.streamId} horizontal={true}
                  icon={data.streamIcon}
                  onClick={()=>this.handleClick(data.streamId)}
                  iconState="primary"
                  title={data.stream}
                  subtitle={data.stream}
                  isFree={!data.locked}
                  footerText={data.streamAccessStatus} />
              </Col>
            )
            }
          </Row>
        </div>
      </div>
    );
  }
}

export default FullTest;