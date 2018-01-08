import React from 'react';
import { mount, shallow } from 'enzyme';
import Hour from '../lib/Hour';
import MockData from '../lib/mock-data';
import dataCleaner from '../lib/data-cleaner';

describe('Hour', () => {
  let wrapper;
  let data = dataCleaner(MockData)

  beforeEach( () => {
    wrapper = shallow(<Hour key='0' data={data.hourlyForecast[0]} />)
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have props', () => {
    expect(wrapper.instance().props.data).toEqual(data.hourlyForecast[0]);
  })

  it('Should render the Hour, an image, weather conditions, and the temperature', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h5').length).toEqual(2);
  })

  it('Should show the hour, conditions, and temperature', () => {
    expect(wrapper.find('h2').text()).toEqual(' 12:00 PM ');
    expect(wrapper.find('h5.hourCondition').text()).toEqual(' Partly Cloudy ');
    expect(wrapper.find('h5.hourTemp').text()).toEqual('47°F');
  })

})