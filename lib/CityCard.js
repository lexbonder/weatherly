import React from 'react';
import Hourly from './hourly.js';
import './CityCard.scss'
import TenDay from './tenday.js';

export default class CityCard extends React.Component {
  constructor() {
    super();

    this.state = {
      forecastToDisplay: '',
      hourlySelect: 'selected',
      tenDaySelect: ''
    }
  }

  displayHourly() {
    this.setState({forecastToDisplay: 'hourly',
                   hourlySelect: 'selected', 
                   tenDaySelect: ''})
  }

  displayTenDay() {
    this.setState({forecastToDisplay: 'tenDay',
                   hourlySelect: '',
                   tenDaySelect: 'selected'})
  }

  render() {
    return (
      <div>
        <div className='weatherInfo'>
          <h2 id='cityName'> {this.props.data.current_observation.display_location.full} </h2>
          <h2 id='dateAndTime'> {this.props.data.forecast.simpleforecast.forecastday[0].date.pretty} </h2>
          <div className='tempAndCondition'>
            <h3 id='low'>Low: <br/><span>{this.props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit}°F</span> </h3>
            <div>
              <h1 id='temperature'> {this.props.data.current_observation.temp_f}°F </h1>
              <h2 id='condition'> {this.props.data.forecast.simpleforecast.forecastday[0].conditions} </h2>
              <img src={this.props.data.forecast.simpleforecast.forecastday[0].icon_url} />
            </div>
            <h3 id='high'> High: <br/><span>{this.props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit}°F</span> </h3>
          </div>
          <h2 id='weatherDescription'> {this.props.data.forecast.txt_forecast.forecastday[0].fcttext_metric} </h2>
        </div>
        <div>
          <button className={this.state.hourlySelect} onClick={ () => {this.displayHourly()} }>7 Hour Forecast</button>
          <button className={this.state.tenDaySelect} onClick={ () => {this.displayTenDay()} }>10 Day Forecast</button>
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