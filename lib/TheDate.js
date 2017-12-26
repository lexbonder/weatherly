import React from 'react';

const TheDate = (props) => {
  console.log(props.data)
  return (
    <div>
      <h1> Current Date: {props.data[0].date.pretty} </h1>
    </div>
  )
}

export default TheDate;