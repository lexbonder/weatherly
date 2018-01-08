import React from 'react';
import { mount, shallow } from 'enzyme';
import Day from '../lib/Day';
import MockData from '../lib/mock-data';
import dataCleaner from '../lib/data-cleaner'

describe('Day', () => {
  let wrapper;
  let data = dataCleaner(MockData)

  beforeEach( () => {
    wrapper = shallow(<Day key='0' data={data.dailyForecast[0]} />)
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have props', () => {
    expect(wrapper.instance().props.data).toEqual(data.dailyForecast[0]);
  })

  it('Should render the Date, an image, high, and low for the day', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h5').length).toEqual(2);
  })

  it('Should show the date, and high and low temperatures', () => {
    expect(wrapper.find('h2').text()).toEqual('12/20/2017')
    expect(wrapper.find('h5.high').text()).toEqual(' 51°F ')
    expect(wrapper.find('h5.low').text()).toEqual(' 32°F ')
  })

})