import React from 'react';
import CityCard from './CityCard';
import Trie from '@lexbonder/complete-me';
import cityList from './city-list';
import dataCleaner from './data-cleaner';
import apiGet from './api';
import './SearchBar.scss';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      display: (JSON.parse(localStorage.getItem('display'))) || 'welcome',
      foundCities: [],
      value: '',
      selectedCity: (JSON.parse(localStorage.getItem('city'))) || '',
      data: (JSON.parse(localStorage.getItem('data'))) || null,
      colorClass: '' 
    };

    this.trie = new Trie();

    this.trie.populate(cityList.data.sort());

    this.apiGet = this.apiGet.bind(this);
  }

  componentDidMount() {
    if (this.state.data) {
      this.apiGet(this.state.selectedCity);
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleKeyUp() {
    let userInput = this.state.value.toUpperCase();
    let matchingCities = this.trie.suggest(userInput);
    
    this.setState({colorClass: ''});
    if (!userInput) {
      this.setState({foundCities: []});
    } else {
      this.setState({foundCities: matchingCities});
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.selectCity(e.target.value);
    }
  }

  apiGet(city) {
    apiGet(city)
      .then( json =>  this.setState( { data: dataCleaner(json) }))
      .catch(() => this.returnError());
  }

  returnError() {
    this.setState({foundCities: ['Couldn\'t find that city, Try Again!'],
      colorClass: 'error'});
  }

  selectCity(city) {
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
              onKeyPress={ (e) => this.handleKeyPress(e) }
              value={this.state.value}
              placeholder='Search by city and state, or zipcode' />
            <div className='returnList'>
              <ul>
                {
                  this.state.foundCities.map( (city, index) => {
                    return (
                      <li key={index}
                        className = {this.state.colorClass} 
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