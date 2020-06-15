import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';


class IconRadiobox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked: []
    };
    const checked=this.props.icon.map((value)=>{
      return '';
    });
    this.setState({checked});
    //this.state.checked=[...checked];
    this.radioboxClick = this.radioboxClick.bind(this);
  }
  radioboxClick(index){
    let checked = this.state.checked;
    if(this.state.checked.includes('active')){
      checked = this.state.checked;
      checked.fill('');
    }
    checked[index] = 'active';
    this.setState({checked});
    this.props.onChange(index);
  }
  render(){
    return (
      this.props.icon.map((value, index)=>{
        return (<Col xs={12} sm={4} key={value}>
          <div className={'choice ' + (this.state.checked[index])} onClick={() => this.radioboxClick(index)}>
            <input type="radio" name={this.props.name} value={this.props.value[index]} ref="checkbox"/>
            <div className="icon">
              <i className={value}></i>
            </div>
            {this.props.title[index] !== undefined ? (<h6>{this.props.title[index]}</h6>):null}
          </div>
        </Col>);
      })
    );
  }
}

IconRadiobox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  icon: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

export default IconRadiobox;
