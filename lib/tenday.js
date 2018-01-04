import React from 'react';
import Day from './day.js';

export default function TenDay(props) {
  let daysArray = props.data.forecast.txt_forecast.forecastday;
  let i = 0;
  let dayAndTime = daysArray.reduce((acc,  day) => {
    while(acc.length < 10) {  
    acc[i] = {'morning': daysArray[i], 
              'evening': daysArray[i+1]}
    i+=2;
    }
    return acc;
  }, [])

  return ( 
    <div>
      {
        dayAndTime.map( day => {
          return <Day data={ day } />
        })
      }
    </div>
  )
}