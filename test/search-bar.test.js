import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import SearchBar from '../lib/SearchBar.js';
import localStorageMock from '../__mocks__/localStorageMock.js';


describe('SearchBar', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<SearchBar />);
  })

  it.skip('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })
})