import React from 'react';
import PropTypes from 'prop-types';
import './day.css';

export default function Day(props) {
  return (
    <div className="day">
      <div className="title-container">
        <h2 className="title-container"> 
          {props.data.date.month}/
          {props.data.date.day}/
          {props.data.date.year}
        </h2>
          <img src={props.data.icon_url} />
      </div>
      <div className="temp-container">
        <h5 className="low"> {props.data.low.fahrenheit}°F </h5>
        <h5 className="high"> {props.data.high.fahrenheit}°F </h5>
      </div>
    </div>
  );
}

Day.propTypes = {
  data: PropTypes.object
};
