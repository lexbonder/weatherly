import React from 'react';

export default function Temperature(props) {
  return (
    <div>
      <h1> Current Temperature: {props.data.temp_f}°F </h1>
    </div>
  )
}