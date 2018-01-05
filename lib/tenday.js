import React from 'react';
import Day from './day.js';
import './tenday.css';

export default function TenDay(props) {
  let daysArray = props.data.forecast.simpleforecast.forecastday;
  return ( 
    <div className="tenDay">
      {
        daysArray.map( (day, index) => {
          return <Day key={index} data={ day } />
        })
      }
    </div>
  )
}