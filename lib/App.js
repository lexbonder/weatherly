import React, {Component} from 'react';
import data from './mock-data';
import City from './City.js';
import Condition from './Condition.js';
import TheDate from './TheDate.js';

const App = () => {
    // console.log(data.current_observation.display_location)
  return (
    <div>
      <City data={data.current_observation.display_location} />
      <Condition data={data.forecast.simpleforecast.forecastday} />
      <TheDate data={data.forecast.simpleforecast.forecastday} />
    </div>
  )

}

export default App;