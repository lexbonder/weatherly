import React from 'react';
import PropTypes from 'prop-types';
import Hour from './Hour.js';
import './Hourly.css';

export default function Hourly({data}) {
  return (
    <div className="hour-container">
      <div className='innerContainer'>
        {
        data.map((hour, index) => <Hour key={index} data={hour} />)
        }
      </div>
    </div>
  );
}

Hourly.propTypes = {
  data: PropTypes.array
};