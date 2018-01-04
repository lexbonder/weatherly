import React from 'react';
import './day.css';

export default function Day(props) {
  return (
    <div className="day">
      <div className="title-container">
        <h5> 
          {props.data.date.day}/
          {props.data.date.month}/
          {props.data.date.year}
           <img src={props.data.icon_url} />
        </h5>
      </div>
      <div className="image-temp-container">
        <p> {props.data.high.fahrenheit}°F </p>
        <p> {props.data.low.fahrenheit}°F </p>
      </div>
    </div>
  )
}
