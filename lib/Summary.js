import React from 'react';

export default function Summary(props) {
  return (
    <div>
      <h1> Summary: {props.data[0].fcttext_metric} </h1>
    </div>
  )
}