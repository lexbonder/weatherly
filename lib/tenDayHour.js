import React from 'react';
import PropTypes from 'prop-types';
import './Hour.css';
import './tenDayHour.css';


export default function TenDayHour(props) {
  let tempName;
  console.log(props)
  props.data.temp < 50 ? (tempName = 'low') : (tempName = 'high');

  return (
    <div className="ten-day-hour">
      <div className="title-container">
        <h2> {props.data.FCTTIME.civil} </h2>
        <img src={props.data.icon_url} />
      </div>
      <div className="temp-container">
        <h5 className='hourCondition'> {props.data.condition} </h5>
        <h5 className={'hourTemp ' + tempName}>
          {props.data.temp.english + '°F'}
        </h5>
      </div>
    </div>
  );
}

TenDayHour.propTypes = {
  data: PropTypes.object
};