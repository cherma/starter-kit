import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { millisToMinutesAndSeconds } from 'utils/helper';
import './TimeTaken.style.scss';

const badgeMapper = (result) => {
  switch (result) {
    case 'CORRECT': return { badgeColor: 'success', badgeText: 'Correct' };
    case 'WRONG': return { badgeColor: 'danger', badgeText: 'Wrong' };
    case 'UNANSWERED': return { badgeColor: 'unanswer', badgeText: 'Unanswered' };
    default: return { badgeColor: 'secondary', badgeText: '' };
  }
};

const TimeTaken = ({ timetaken, overtimed }) =>{
  const { badgeColor, badgeText } = badgeMapper();
  return( <div className="time-taken">
    <i className="now-ui-icons ui-2_time-alarm"></i>
    <p className="time-taken--content">&nbsp;Timetaken <b> { millisToMinutesAndSeconds(timetaken)}</b></p>
  &emsp;<Badge color={badgeColor}>{badgeText}</Badge>
  &emsp;{overtimed && <Badge color="danger">Overtimed</Badge>}
  </div>);
};

TimeTaken.defaultProps = {
  overtimed: false,
  timetaken: 0
};

TimeTaken.propTypes = {
  timetaken: PropTypes.number,
  overtimed: PropTypes.bool
};

export default TimeTaken;