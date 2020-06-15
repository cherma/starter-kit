import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Countdown from 'react-countdown-now';


class TestHeader extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  shouldComponentUpdate(nextProps){
    return !(nextProps.timer === this.props.timer);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.stopCounter !== this.props.stopCounter){
      this.refs.countdown.pause();
    }
  }

  triggerSubmit(){
    this.props.submitTest();
  }

  render(){
    return (
      <Navbar className="so-test-navbar">
        <div className="container-fluid">
          <NavbarBrand style={{fontSize:'1em', fontWeight: 600}} >SKILL OPTIMA</NavbarBrand>
          <a className="nav navbar-nav navbar-right test-counter">
            <Countdown
              renderer={props => <div>{props.hours >= 10 ? props.hours : `0${props.hours}`}:{props.minutes >= 10 ? props.minutes : `0${props.minutes}`}:{props.seconds >= 10 ? props.seconds : `0${props.seconds}`}
              </div>}
              controlled={false}  ref="countdown" date={Date.now() + this.props.timer} onComplete={()=>this.triggerSubmit()} />
          </a>
        </div>
      </Navbar>
    );
  }
}

export default TestHeader;
