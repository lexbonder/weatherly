import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDay from '../lib/TenDay';
import MockData from '../lib/mock-data';
import dataCleaner from '../lib/data-cleaner';

describe('TenDay', () => {
  let wrapper;
  let data = dataCleaner(MockData);

  beforeEach( () => {
    wrapper = shallow(<TenDay data={data.dailyForecast} />)
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have props', () => {
    expect(wrapper.instance().props.data).toEqual(data.dailyForecast);
    expect(wrapper.instance().props.data.length).toEqual(10);
  })

  it('Should render 10 Day components', () => {
    expect(wrapper.find('Day').length).toEqual(10);
  })

  it('Should mount 10 Day components', () => {
    wrapper = mount(<TenDay data={data.dailyForecast} />)

    expect(wrapper.find('div.day').length).toEqual(10);
    expect(wrapper.find('div.title-container').length).toEqual(10);
    expect(wrapper.find('h2').length).toEqual(10);
    expect(wrapper.find('img').length).toEqual(10);
    expect(wrapper.find('div.temp-container').length).toEqual(10);
    expect(wrapper.find('h5').length).toEqual(20);
  })
})