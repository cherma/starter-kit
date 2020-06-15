import React from 'react';
import PropTypes from 'prop-types';
import {  Card, CardFooter, Row, Col, CardBody} from 'reactstrap';
import './Stream.style.css';

const style={
  height: 65,
  marginTop: 8,
  position: 'relative',
  display: 'flex'
};

const titleStyle={
  display: 'table',
  marginBottom: 0,
};

const  Stream = ({ id, onClick, iconState, cardExpiry, horizontal, isFree, footerText }) =>{
  const handleStream = () =>{
    const data = id;
    onClick(data, isFree);
  };

  const convertToDate = (data) =>{
    const date = data && new Date(data);
    if(!isNaN(date.getTime())) {
      const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
      const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(date);
      return (`${da}-${mo}-${ye%100}`);
    }
    return '';
  };

  const icon = (
    iconState ? <div className={'icon icon-stream icon-' + iconState + (horizontal ? ' icon-circle':'')}>
      { <img src={`/skilloptima/user/getStreamIcon?imageId=${id}`} alt=""/>}
    </div> : null
  );
  const title = (<div><h4 className="info-title">{title}</h4></div>);
  const subtitle = (<div className="stream-title-wrapper"><h5 className="stats-title stream-title" style={titleStyle}>{subtitle}</h5></div>);
  return (
    <Card onClick={handleStream} className="card-stats" style={{cursor:'pointer'}}>
      <CardBody>
        <div className={'statistics' + (horizontal ? ' statistics-horizontal':'')}>
          <div  className={'info' + (horizontal ? ' info-horizontal':'')}>
            {
              horizontal ? (
                <Row>
                  <Col xs={12} className="stream-container">
                    <div style={style}>
                      {subtitle}
                      {icon}
                    </div>
                  </Col>
                </Row>
              ):(
                <div>
                  {icon}
                  {title}
                  {subtitle}
                </div>
              )
            }
          </div>
        </div>
      </CardBody>
      <hr />
      <CardFooter>
        {footerText ? <div className={isFree ? 'stream-stats stats text-success' : 'stream-stats stats text-danger'} >
          {footerText}
        </div> : null}
        {
          cardExpiry ? <div className="stats">
            <i className="now-ui-icons ui-2_time-alarm"></i>
                        Expires on {convertToDate(cardExpiry)}
          </div> : null
        }
      </CardFooter>
    </Card>
  );
};

Stream.defaultProps = {
  iconState: 'default'
};

Stream.propTypes = {
  iconState: PropTypes.oneOf(['primary','success','info','danger','warning','default']),
  icon: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  horizontal: PropTypes.bool,
  isFree: PropTypes.bool,
  footerText: PropTypes.string,
  cardExpiry: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.any
};

export default Stream;