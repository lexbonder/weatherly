import React from 'react';
import PropTypes from 'prop-types';
import './Day.css';

export default function Day(props) {
  return (
    <div className="day">
      <div className="title-container">
        <h2 className="title-container"> 
          {props.data.month}/
          {props.data.day}/
          {props.data.year}
        </h2>
        <img src={props.data.icon} />
      </div>
      <div className="temp-container">
        <h5 className="low"> {props.data.lowTemp}°F </h5>
        <h5 className="high"> {props.data.highTemp}°F </h5>
      </div>
    </div>
  );
}

Day.propTypes = {
  data: PropTypes.object
};
