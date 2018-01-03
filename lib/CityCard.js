import React from 'react';
import Hourly from './hourly.js' 

export default class CityCard extends React.Component {
  constructor() {
    super();

    this.state = {
      forecastToDisplay: ''
    }
  }

  displayHourly() {
    this.setState({forecastToDisplay: 'hourly'})
  }

  displayTenDay() {
    this.setState({forecastToDisplay: 'tenDay'})
  }

  render() {
    return (
      <div>
        <h1> Current City: {this.props.data.current_observation.display_location.full} </h1>
        <h1> Current Condition: {this.props.data.forecast.simpleforecast.forecastday[0].conditions}
          <img src={this.props.data.forecast.simpleforecast.forecastday[0].icon_url} />
        </h1>
        <h1> Current Date: {this.props.data.forecast.simpleforecast.forecastday[0].date.pretty} </h1>
        <h1> Summary: {this.props.data.forecast.txt_forecast.forecastday[0].fcttext_metric} </h1>
        <h1> Current Temperature: {this.props.data.current_observation.temp_f}°F </h1>
        <h1> Daily High: {this.props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit}°F </h1>
        <h1> Daily Low: {this.props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit}°F </h1>
        <div>
          <button onClick={ () => {this.displayHourly()} }>7 Hour Forecast</button>
          <button onClick={ () => {this.displayTenDay()} }>10 Day Forecast</button>
          <div>
            {
            this.state.forecastToDisplay === 'hourly' &&
            <Hourly data={this.props.data.hourly_forecast}/>
            }
            {
            this.state.forecastToDisplay === 'tenDay' &&
            <p>wooooo</p>
            }
          </div>
        </div>
      </div>
    )
  }
}