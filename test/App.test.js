import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App';

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />)
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should render a SearchBar component', () => {
    expect(wrapper.find('SearchBar').length).toEqual(1);
  })
})