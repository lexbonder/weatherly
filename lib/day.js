import React from 'react';
import PropTypes from 'prop-types';
import './Day.css';
import TenDayHour from './tenDayHour.js'

export default class Day extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayHours: null
    }
  }

  render() {

  const {month, day, year, lowTemp, highTemp, hours} = this.props.data;

  return (
    <div className="day" onClick={ () => this.setState({displayHours: 'show'}) }>
      <div className="title-container">
        <h2 className="title-container"> 
          {month}/
          {day}/
          {year}
        </h2>
        <img src={this.props.data.icon} />
      </div>
      <div className="temp-container">
        <h5 className="low"> {lowTemp}°F </h5>
        <h5 className="high"> {highTemp}°F </h5>
      </div>
      
      <div className="daily-hour-container">
      {
        this.state.displayHours &&
          hours.map( hour => {
            return <TenDayHour data= { hour } />
        })
      }
    </div>
    </div>
  );
}
}

Day.propTypes = {
  data: PropTypes.object
};
