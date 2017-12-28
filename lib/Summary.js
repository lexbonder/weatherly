import React from 'react';

const Summary = (props) => {
  return (
    <div>
      <h1> Summary: {props.data[0].fcttext_metric} </h1>
    </div>
  )
}

export default Summary;