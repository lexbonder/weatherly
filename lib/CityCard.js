import React from 'react';
import data from './mock-data';
import City from './City.js';
import Condition from './Condition.js';
import HighLow from './highLow.js';
import TheDate from './TheDate.js';
import Summary from './Summary.js';
import Temperature from './Temperature.js';

export default function CityCard(props) {
  return (
    <div>
      <City data={data.current_observation.display_location} />
      <Condition data={data.forecast.simpleforecast.forecastday} />
      <TheDate data={data.forecast.simpleforecast.forecastday} />
      <Summary data={data.forecast.txt_forecast.forecastday} />
      <Temperature data={data.current_observation} />
      <HighLow data={data.forecast.simpleforecast.forecastday} />
    </div>
  )
}