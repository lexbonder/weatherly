import React from 'react';

const City = (props) => {
  return (
    <div>
      <h1> Current City: {props.data.full} </h1>
    </div>
  )
}

export default City;