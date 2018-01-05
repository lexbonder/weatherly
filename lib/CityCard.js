import React from 'react';
import Hourly from './hourly.js';
import './CityCard.scss'
import TenDay from './tenday.js';
import apiGet from './api.js'

export default class CityCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastToDisplay: ''
    }
    this.props = props;
  }

  displayHourly() {
    this.setState({forecastToDisplay: 'hourly'})
  }

  displayTenDay() {
    this.setState({forecastToDisplay: 'tenDay'})
  }

  componentDidMount() {
    localStorage.setItem('props', JSON.stringify(this.props))
  }

  render() {
    return (
      <div>
        <div className='weatherInfo'>
          <h2 id='cityName'> {this.props.data.current_observation.display_location.full} </h2>
          <h2 id='dateAndTime'> {this.props.data.current_observation.observation_time} </h2>
          <div className='tempAndCondition'>
            <div>
              <h1 id='temperature'> {this.props.data.current_observation.temp_f}°F </h1>
              <h2 id='condition'> {this.props.data.forecast.simpleforecast.forecastday[0].conditions} </h2>
            </div>
            <img src={this.props.data.forecast.simpleforecast.forecastday[0].icon_url} />
          </div>
            <h3 id='highLow'> High: {this.props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit}°F |
              Low: {this.props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit}°F </h3>
          <h2 id='weatherDescription'> {this.props.data.forecast.txt_forecast.forecastday[0].fcttext_metric} </h2>
        </div>
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
            <TenDay data={this.props.data} />
            }
          </div>
        </div>
      </div>
    )
  }
}