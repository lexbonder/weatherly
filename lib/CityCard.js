import React from 'react';
import Hourly from './hourly.js';
import TenDay from './tenday.js';
import apiGet from './api.js';
import './CityCard.scss';

export default class CityCard extends React.Component {
  constructor(props) {
    super(props);

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

  componentDidMount() {
    localStorage.setItem('data', JSON.stringify(this.props.data))
    localStorage.setItem('city', JSON.stringify(this.props.chosenCity))
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== this.props || prevState !== this.state)
    localStorage.setItem('data', JSON.stringify(this.props.data))
    localStorage.setItem('city', JSON.stringify(this.props.chosenCity))
  }

  render() {
    return (
      <div className = "cardContainer">
        <div className='weatherInfo'>
          <h1 id='cityName'> {this.props.data.current_observation.display_location.full} </h1>
          <h4 id='dateAndTime'> {this.props.data.current_observation.observation_time} </h4>
          <div className='tempAndCondition'>
            <h3 className='low'>Low: <br/><span>{this.props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit}°F</span> </h3>
            <div className="spacing-container">
              <h1 id='temperature'> {this.props.data.current_observation.temp_f}°F </h1>
              <h2 id='condition'> {this.props.data.forecast.simpleforecast.forecastday[0].conditions} </h2>
              <img src={this.props.data.forecast.simpleforecast.forecastday[0].icon_url} className='card-image'/>
            </div>
            <h3 className='high'> High: <br/><span>{this.props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit}°F</span> </h3>
          </div>
          <h2 id='weatherDescription'> {this.props.data.forecast.txt_forecast.forecastday[0].fcttext} </h2>
        <div>
          <button className={this.state.hourlySelect} id='hourlyButton' onClick={ () => {this.displayHourly()} }>7 Hour Forecast</button>
          <button className={this.state.tenDaySelect} id='tenDayButton' onClick={ () => {this.displayTenDay()} }>10 Day Forecast</button>
          <div>
            {
            this.state.hourlySelect &&
            <Hourly data={this.props.data.hourly_forecast}/>
            }
            {
            this.state.tenDaySelect &&
            <TenDay data={this.props.data.forecast.simpleforecast.forecastday} />
            }
          </div>
        </div>
      </div>
      </div>
    )
  }
}