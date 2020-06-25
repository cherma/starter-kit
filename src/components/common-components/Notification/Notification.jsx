import React from 'react';
import PropTypes from 'prop-types';
import NotificationAlert from 'react-notification-alert';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.notification = React.createRef();
    this.state = {
      id:'',
      place: '',
      message: '',
      type: '',
      icon: '',
      autoDismiss: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props.newNotification && props.newNotification.id !== state.id) {
      return {
        ...props.newNotification
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.id !== this.state.id) {
      this.notify();
    }
  }

  notify() {
    const options = {
      place: 'bl',
      message: (<div> {this.state.message} </div>),
      type: this.state.type,
      icon: 'now-ui-icons ui-1_bell-53',
      autoDismiss: 7
    };
    this.notification.current.notificationAlert(options);
  }

  render() {
    return(
      <NotificationAlert  ref={this.notification}/>
    );
  }
}

export default Notification;

Notification.propTypes = {
  newNotification: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string,
    autoDismiss: PropTypes.number
  })

};

Notification.defaultProps = {
  newNotification: {
    id: '',
    place: 'bl',
    type: 'success',
    icon: 'now-ui-icons ui-1_bell-53',
    autoDismiss: 7
  }
};