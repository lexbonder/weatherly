import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day.js';
import './TenDay.css';

export default function TenDay(props) {
  return ( 
    <div className="tenDayContainer">
      <div className="innerContainer">
        {
          props.data.map( (day, index) => {
            return <Day key={index} data={ day } />;
          })
        }
      </div>
    </div>
  );
}

TenDay.propTypes = {
  data: PropTypes.array
};