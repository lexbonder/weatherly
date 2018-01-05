import React, { Component } from 'react';
import CityCard from './CityCard.js';
import './SearchBar.scss';
import cityList from './city-list.js'
import Trie from '@lexbonder/complete-me';
import key from '../ApiKey.js'
import apiGet from './api.js';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      foundCities: [],
      value: '',
      selectedCity: '',
      data: null
    }
    this.props = props;

    this.cityArray = cityList.data;

    this.trie = new Trie();

    this.trie.populate(cityList.data.sort());

    // this.url = `http://api.wunderground.com/api/${key}/forecast/geolookup/conditions/hourly/forecast10day/q/`
    this.apiGet = this.apiGet.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleKeyUp() {
    let userInput = this.state.value.toUpperCase();
    let matchingCities = this.trie.suggest(userInput);
    
    if (!userInput) {
      this.setState({foundCities: []})
    } else if (!matchingCities.length) {
      this.setState({foundCities: ['No Matching Cities']})
    } else {
      this.setState({foundCities: matchingCities})
    }
    console.log(matchingCities)
  }

  // handleBlur() {
  //   this.setState({foundCities: []})
  // }
  apiGet (city) {
    console.log('getting data')
    apiGet(city)
    .then( json =>  this.setState( { data: json }))
  }

  selectCity(city) {
    if (city !== 'No Matching Cities') {
      this.setState({selectedCity: city,
                     foundCities: [],
                     value: '',
                    })
      this.apiGet(city);
    }
    // This is where you get the city to throw into the API url 
    console.log(city);
    // this.fetchWeather(city)
  }

  // fetchWeather(city) {
  //   fetch(`${this.url}${city}.json`)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  // }

  render() {
    return (
      <div>
        <input type='text'
               onChange={ (e) => this.handleChange(e) }
               onKeyUp={ (e) => this.handleKeyUp(e) }
               // onFocus={ (e) => this.handleKeyUp(e) }
               // onBlur= { () => this.handleBlur() }
               value={this.state.value}
               placeholder='Search by city or state' />
        <div className='returnList'>
          <ul>
            {
              this.state.foundCities.map( (city, index) => {
                return (
                  <li key={index} 
                      onClick={ () => this.selectCity(city) }>
                    {city}
                  </li>
                )
              })
            }
          </ul>
        </div>
        {
          this.state.selectedCity && this.state.data &&
          <CityCard data={this.state.data} chosenCity={this.state.selectedCity} /> 
        }
      </div>
    )
  }
}