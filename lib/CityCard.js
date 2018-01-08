import React from 'react';
import PropTypes from 'prop-types';
import Hourly from './Hourly';
import TenDay from './TenDay';
import './CityCard.scss';

export default class CityCard extends React.Component {
  constructor() {
    super();

    this.state = {
      forecastToDisplay: '',
      hourlySelect: 'selected',
      tenDaySelect: ''
    };
  }

  displayHourly() {
    this.setState({forecastToDisplay: 'hourly',
                   hourlySelect: 'selected', 
                   tenDaySelect: ''});
  }

  displayTenDay() {
    this.setState({forecastToDisplay: 'tenDay',
                   hourlySelect: '',
                   tenDaySelect: 'selected'});
  }

  componentDidMount() {
    localStorage.setItem('data', JSON.stringify(this.props.data));
    localStorage.setItem('city', JSON.stringify(this.props.chosenCity));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props || prevState !== this.state) {
      localStorage.setItem('data', JSON.stringify(this.props.data));
      localStorage.setItem('city', JSON.stringify(this.props.chosenCity));
    }
  }

  render() {
    return (
      <div className = "cardContainer">
        <div className='weatherInfo'>
          <h1 id='cityName'> 
            {
              this.props.data
              .currentForecast
              .cityName
            } 
          </h1>
          <h4 id='dateAndTime'> 
            {
              this.props.data
              .currentForecast
              .time
            } 
          </h4>
          <div className='tempAndCondition'>
            <h3 className='low'>Low: <br/>
              <span>
                {
                  // Low Temp
                this.props.data
                .currentForecast
                .lowTemp
                }°F
              </span> 
            </h3>
            <div className="spacing-container">
              <h1 id='temperature'> 
                {
                  // current temp
                this.props.data
                .currentForecast
                .currentTemp
                }°F 
              </h1>
              <h2 id='condition'> 
                {
                  // Conditions
                this.props.data
                .currentForecast
                .conditions
                } 
              </h2>
              <img src=
              {
                // image
              this.props.data
              .currentForecast
              .image
              } 
                className='card-image'/>
            </div>
            <h3 className='high'> High: <br/>
              <span>
                {
                  // high temp
                this.props.data
              .currentForecast
              .highTemp
                }°F
              </span> 
            </h3>
          </div>
          <h4 id='weatherDescription'> 
            {
              // Description
              this.props.data
              .currentForecast
              .description
            } 
          </h4>
          <div>
            <button className={this.state.hourlySelect} 
              id='hourlyButton' 
              onClick={ () => {
                this.displayHourly();
              } }>7 Hour Forecast
            </button>
            <button className={this.state.tenDaySelect} 
              id='tenDayButton' 
              onClick={ () => {
                this.displayTenDay();
              } }>10 Day Forecast
            </button>
            <div>
              {
                this.state.hourlySelect &&
                <Hourly data={this.props.data.hourlyForecast}/>
              }
              {
                this.state.tenDaySelect &&
                <TenDay data={this.props.data.dailyForecast} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CityCard.propTypes = {
  data: PropTypes.object,
  chosenCity: PropTypes.string
};
