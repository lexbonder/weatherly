import React, { Component } from 'react';
import CityCard from './CityCard.js';
import './SearchBar.scss';
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
    this.cityArray = ['Louisville, KY', 'San Francisco, CA', 'Denver, CO'];
    this.apiGet = this.apiGet.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleKeyUp(e) {
    let userInput = this.state.value;
    let matchingCities = this.cityArray.filter( city => {
      return city.toUpperCase().includes(userInput.toUpperCase())
    })
    
    if (!userInput) {
      this.setState({foundCities: []})
    } else if (!matchingCities.length) {
      this.setState({foundCities: ['No Matching Cities']})
    } else {
      this.setState({foundCities: matchingCities})
    }
  }

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
  }

  render() {
    return (
      <div>
        <input type='text'
               onChange={ (e) => this.handleChange(e) }
               onKeyUp={ (e) => this.handleKeyUp(e) } 
               value={this.state.value}
               placeholder='Search by city or state' />
        <ul>
          {
            this.state.foundCities.map( (city, index) => {
              return <li key={index} onClick={ () => this.selectCity(city) }>{city}</li>
            })
          }
        </ul>
        {
          this.state.selectedCity && this.state.data &&
          <CityCard data={this.state.data} chosenCity={this.state.selectedCity} /> 
        }
      </div>
    )
  }
}