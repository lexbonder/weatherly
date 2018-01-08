import React, { Component } from 'react';
import CityCard from './CityCard.js';
import './SearchBar.scss';
import cityList from './city-list.js';
import zipcodeList from './zipcode-list.js';
import Trie from '@lexbonder/complete-me';
import apiGet from './api.js';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      display: (JSON.parse(localStorage.getItem('display'))) || 'welcome',
      foundCities: [],
      value: '',
      selectedCity: (JSON.parse(localStorage.getItem('city'))) || '',
      data: (JSON.parse(localStorage.getItem('data'))) || null
    };

    this.trie = new Trie();

    this.trie.populate(cityList.data.sort());
    this.trie.populate(zipcodeList.data.sort());

    this.apiGet = this.apiGet.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleKeyUp() {
    let userInput = this.state.value.toUpperCase();
    let matchingCities = this.trie.suggest(userInput);
    
    if (!userInput) {
      this.setState({foundCities: []});
    } else if (!matchingCities.length) {
      this.setState({foundCities: ['No Matching Cities']});
    } else {
      this.setState({foundCities: matchingCities});
    }
  }

  // componentDidMount() {
  //   if (this.state.data) {
  //     this.apiGet(this.state.selectedCity);
  //   }
  // }

  apiGet (city) {
    apiGet(city)
    .then( json =>  this.setState( { data: json }));
  }

  selectCity(city) {
    if (city !== 'No Matching Cities') {
      this.setState({
        selectedCity: city,
        foundCities: [],
        value: '',
        display: 'loaded'
        }, 
        function() {
          localStorage.setItem('display', (JSON.stringify(this.state.display)));
      });
      this.apiGet(city);
    }
  }

  render() {
    return (
      <div id={this.state.display}>
        <div className="background" id={this.state.display}>
          <div className={this.state.display + '2'}>
            <h1 className='title'>
              Weath
              <span id="header-decoration">erly</span>
            </h1>
            <input type='text'
                   onChange={ (e) => this.handleChange(e) }
                   onKeyUp={ () => this.handleKeyUp() }
                   value={this.state.value}
                   placeholder='Search by city or zipcode' />
            <div className='returnList'>
              <ul>
                {
                  this.state.foundCities.map( (city, index) => {
                    return (
                      <li key={index} 
                          onClick={ () => this.selectCity(city) }>
                        {city}
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div>
          {
            this.state.selectedCity && this.state.data &&
            <CityCard data={this.state.data}
                      chosenCity={this.state.selectedCity}/> 
          }
        </div>
      </div>
    );
  }
}