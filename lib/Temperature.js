import React from 'react';

const Temperature = (props) => {
  return (
    <div>
      <h1> Current Temperature: {props.data.temp_f}°F </h1>
    </div>
  )
}

export default Temperature;