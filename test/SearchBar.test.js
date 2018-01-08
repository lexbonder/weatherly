import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import SearchBar from '../lib/SearchBar';
import localStorageMock from '../__mocks__/localStorageMock.js';

describe('SearchBar', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<SearchBar />);
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have a title, searchbar to start', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(0);
    expect(wrapper.find('CityCard').length).toEqual(0);
  })

  it('Should have default states', () => {
    expect(wrapper.state()).toEqual({
      display: 'welcome',
      foundCities: [],
      value: '',
      selectedCity: '',
      data: null
    })
  })

  it('Should have trie with 1000 cities and 1500 zipcodes', () => {
    expect(wrapper.instance().trie.wordCount).toEqual(2500)
  })

  it('Should change the value state when text is entered in the input', () => {
    expect(wrapper.state().value).toEqual('');
    
    wrapper.find('input').simulate('change', {target: {value: 'new y'}})
    
    expect(wrapper.state().value).toEqual('new y');
  })

  it('Should change the foundCities state when text is entered in the input', () => {
    expect(wrapper.state().foundCities).toEqual([]);
    
    wrapper.find('input').simulate('change', {target: {value: 'new y'}})
    wrapper.find('input').simulate('keyup', {which: 'y'})
    
    expect(wrapper.state().foundCities).toEqual(['NEW YORK, NY']);
  })

  it('Should return an error in foundCities when the city doesnt exist', () => {
    expect(wrapper.state().foundCities).toEqual([]);
    
    wrapper.find('input').simulate('change', {target: {value: 'asd'}})
    wrapper.find('input').simulate('keyup', {which: 'd'})
    
    expect(wrapper.state().foundCities).toEqual(['No Matching Cities']);
  })

  it('Should render list items when text is entered in the searchbar', () => {
    expect(wrapper.find('li').length).toEqual(0)
    
    wrapper.find('input').simulate('change', {target: {value: 'lo'}})
    wrapper.find('input').simulate('keyup', {which: 'o'})
    
    expect(wrapper.find('li').length).toEqual(12)
  })

  it('Should show the city name inside of the list item', () => {
    expect(wrapper.find('li').length).toEqual(0)
    
    wrapper.find('input').simulate('change', {target: {value: 'new y'}})
    wrapper.find('input').simulate('keyup', {which: 'y'})
    
    expect(wrapper.find('li').length).toEqual(1)
    expect(wrapper.find('li').text()).toEqual('NEW YORK, NY')
  })

  it('Should render a CityCard Component when a city is selected', () => {
    expect(wrapper.find('CityCard').length).toEqual(0);

    wrapper.setState({selectedCity: 'NEW YORK, NY', data:{data: 'data returned from api'}})

    expect(wrapper.find('CityCard').length).toEqual(1);
  }) 

})