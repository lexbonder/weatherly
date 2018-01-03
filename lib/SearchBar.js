import React, { Component } from 'react';
import CityCard from './CityCard.js';
import data from './mock-data.js';

export default class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      foundCities: [],
      value: '',
      selectedCity: ''
    }
    this.props = props;
    this.cityArray = [this.props.data.current_observation.display_location.full];
  }

  handleChange(e) {
    this.setState({value: e.target.value})
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

  selectCity(city) {
    if (city !== 'No Matching Cities') {
      this.setState({selectedCity: city})
      this.setState({foundCities: []})
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
        <h2>{this.state.searchResults}</h2>
        <ul>
          {
            this.state.foundCities.map( city => {
              return <li onClick={ () => this.selectCity(city) }>{city}</li>
            })
          }
        </ul>
        {
          this.state.selectedCity &&
          <CityCard data={data} chosenCity={this.state.selectedCity} /> 
        }
      </div>
    )
  }
}