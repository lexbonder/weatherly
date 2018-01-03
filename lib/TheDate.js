import React from 'react';

export default function TheDate(props) {
  console.log(props.data)
  return (
    <div>
      <h1> Current Date: {props.data[0].date.pretty} </h1>
    </div>
  )
}