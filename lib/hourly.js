import React from 'react';
import PropTypes from 'prop-types';
import Hour from './hour.js';
import './hourly.css';

export default function Hourly(props) {
  let hoursArray = props.data.reduce((acc, obj) => {
    if (acc.length < 7) {
      acc.push(obj);
    }
    return acc;
  }, []);
  
  return (
    <div className="hour-container">
      <div className='innerContainer'>
        {hoursArray.map((hour, index) => {
          return <Hour key={index} data={hour} />;
        })}
      </div>
    </div>
  );
}

Hourly.propTypes = {
  data: PropTypes.array
};