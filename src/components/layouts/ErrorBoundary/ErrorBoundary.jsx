import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: undefined,
      info: undefined,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error });
    this.setState({ info });
  }

  render(){
    const error = this.state.error;
    if(error) {
      return <h>SOMETHING WENT WRONG</h>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;