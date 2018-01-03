import React from 'react';
import './hour.css';

const Hour = (props) => {
  return (
    <div className="hour">
      <h2> {props.data.FCTTIME.civil} </h2>
      <h2> {props.data.condition} </h2>
      <h2> {props.data.temp.english + '°F'} </h2>
      <img src={props.data.icon_url} />
    </div>
  )
}

export default Hour;