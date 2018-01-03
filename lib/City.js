import React from 'react';

export default function City(props) {
  return (
    <div>
      <h1> Current City: {props.data.full} </h1>
    </div>
  )
}