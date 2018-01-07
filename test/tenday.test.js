import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDay from '../lib/TenDay.js';
import MockData from '../lib/mock-data.js';

describe('TenDay', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<TenDay data={MockData.forecast.simpleforecast.forecastday} />)
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have props', () => {
    expect(wrapper.instance().props.data).toEqual(MockData.forecast.simpleforecast.forecastday);
    expect(wrapper.instance().props.data.length).toEqual(10);
  })

  it('Should render 10 Day components', () => {
    expect(wrapper.find('Day').length).toEqual(10);
  })

  it('Should mount 10 Day components', () => {
    wrapper = mount(<TenDay data={MockData.forecast.simpleforecast.forecastday} />)

    expect(wrapper.find('div.day').length).toEqual(10);
    expect(wrapper.find('div.title-container').length).toEqual(10);
    expect(wrapper.find('h5').length).toEqual(10);
    expect(wrapper.find('img').length).toEqual(10);
    expect(wrapper.find('div.temp-container').length).toEqual(10);
    expect(wrapper.find('p').length).toEqual(20);
  })
})