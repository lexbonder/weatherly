import React from 'react';

export default function HighLow(props) {
  return (
    <div>
      <h1> Daily High: {props.data[0].high.fahrenheit}°F </h1>
      <h1> Daily Low: {props.data[0].low.fahrenheit}°F </h1>
    </div>
  )
}