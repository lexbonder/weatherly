import React, {Component} from 'react';
import CityCard from './CityCard.js';
import data from './mock-data';

const App = () => {
  return (
   <CityCard data={data} />
  ) 
}

export default App;