import React from 'react';
import './day.css';

export default function Day(props) {
  return (
    <div className="day">
      <h5> {props.data.morning.title} </h5>
      <img src={props.data.morning.icon_url} />
      <p> {props.data.morning.fcttext} </p>
      <h5> {props.data.evening.title} </h5>
      <img src={props.data.evening.icon_url} />
      <p> {props.data.evening.fcttext} </p>
    </div>
  )
}
