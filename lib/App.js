import React, {Component} from 'react';
import CityCard from './CityCard.js';
import Hourly from './hourly.js';
import SearchBar from './SearchBar.js';
import data from './mock-data';

export default function App() {
  return (
    <div>
      <CityCard data={data} />
      <SearchBar data={data} />
      <Hourly data={data.hourly_forecast} /> 
    </div>
  ) 
}
export default App; 
  <div>
    <CityCard data={data} />
  </div>
  ) 
}