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
  console.log(hoursArray);
  return (
    <div className="hour-container">
      <h1 className="head"> HOURLY </h1>
        {hoursArray.map(hour => {
          return <Hour data={hour} />
        })}
    </div>
  )
}