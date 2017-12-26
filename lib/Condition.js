import React from 'react';

const Condition = (props) => {
  return (
    <div>
      <h1> Current Condition: {props.data[0].conditions} </h1>
    </div>
  )
}

export default Condition;