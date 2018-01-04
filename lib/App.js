import React, {Component} from 'react';
import CityCard from './CityCard.js';
import Hourly from './hourly.js';
import SearchBar from './SearchBar.js';
import data from './mock-data';
import './App.css'

export default function App() {
  return (
    <div>
      <SearchBar data={data} />
    </div>
  ) 
}
