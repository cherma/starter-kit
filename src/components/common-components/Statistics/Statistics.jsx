import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import './Statistics.style.css';

const Statistics = () =>{
  const icon = (
    <div className={'icon icon-' + this.props.iconState + (this.props.horizontal ? ' icon-circle':'')}>
      <i className={'now-ui-icons ' + this.props.icon}></i>
    </div>
  );
  const image= (
    <div>
      <img style={{height:32, marginBottom: 6}} src={this.props.image} />
    </div>
  );
  const title = (<h3 className="info-title">{this.props.title}</h3>);
  const subtitle = (<h6 className="stats-title">{this.props.subtitleOne}</h6>);
  const subtitleTwo = (<h6 className="stats-title">{this.props.subTitleTwo}</h6>);
  return (
    <div className={'statistics' + (this.props.horizontal ? ' statistics-horizontal':'')}>
      <div className={'info' + (this.props.horizontal ? ' info-horizontal':'')}>
        {
          this.props.horizontal ? (
            <Row>
              <Col xs={5}>
                {this.props.image ? {image} : {icon}}
              </Col>
              <Col xs={7} className="text-right">
                {title}
                {subtitle}
              </Col>
            </Row>
          ):(
            <div>
              {this.props.image ? image : icon}
              {title}
              {subtitle}
              {subtitleTwo}
            </div>
          )
        }
      </div>
    </div>
  );
};

Statistics.defaultProps = {
  iconState: 'default',
  image: ''
};

Statistics.propTypes = {
  iconState: PropTypes.oneOf(['primary','success','info','danger','warning','default']),
  icon: PropTypes.string,
  title: PropTypes.node,
  subtitleOne: PropTypes.node,
  subTitleTwo: PropTypes.node,
  horizontal: PropTypes.bool
};

export default Statistics;
