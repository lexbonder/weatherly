import React from 'react';

const Condition = (props) => {
  return (
    <div>
      <h1> Current Condition: {props.data[0].conditions}
        <img src={props.data[0].icon_url} />
      </h1>
    </div>
  )
}

export default Condition;