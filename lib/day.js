import React from 'react';
import './day.css';

export default function Day(props) {
  return (
    <div className="day">
      <div className="title-weather">
        <h5 className="title-container"> 
          {props.data.date.month}/
          {props.data.date.day}/
          {props.data.date.year}
        </h5>
          <img src={props.data.icon_url} />
      </div>
      <div className="temp-container">
        <h5 className="low"> {props.data.low.fahrenheit}°F </h5>
        <h5 className="high"> {props.data.high.fahrenheit}°F </h5>
      </div>
    </div>
  )
}
