import React from 'react';
import Hour from './hour.js';
import './hourly.css';

export default function Hourly(props) {
  let date = new Date();
  let currentHour = date.getHours();
  let hoursArray = props.data.reduce((acc, obj) => {
    let objValues = Object.values(obj.FCTTIME);
    let i = 0;
    if (objValues[i] == currentHour && acc.length < 7) {
      acc.push(obj);
      i++;
      currentHour++;
    }
    return acc;
  }, [])
  return (
    <div className="hour-container">
      <div className='innerContainer'>
        {hoursArray.map((hour, index) => {
          return <Hour key={index} data={hour} />
        })}
      </div>
    </div>
  )
}