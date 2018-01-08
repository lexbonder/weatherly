import React from 'react';
import { mount, shallow } from 'enzyme';
import Hourly from '../lib/Hourly';
import MockData from '../lib/mock-data';
import dataCleaner from '../lib/data-cleaner';

describe('Hourly', () => {
  let wrapper;
  let data = dataCleaner(MockData);

  beforeEach( () => {
    wrapper = shallow(<Hourly data={data.hourlyForecast} />)
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have props', () => {
    expect(wrapper.instance().props.data).toEqual(data.hourlyForecast);
    expect(wrapper.instance().props.data.length).toEqual(7);
  })

  it('Should render 7 Hour components', () => {
    expect(wrapper.find('Hour').length).toEqual(7);
  })

  it('Should mount 7 Hour components', () => {
    wrapper = mount(<Hourly data={data.hourlyForecast} />)

    expect(wrapper.find('div.hour').length).toEqual(7);
    expect(wrapper.find('div.title-container').length).toEqual(7);
    expect(wrapper.find('h2').length).toEqual(7);
    expect(wrapper.find('img').length).toEqual(7);
    expect(wrapper.find('div.temp-container').length).toEqual(7);
    expect(wrapper.find('h5').length).toEqual(14);
  })
})
