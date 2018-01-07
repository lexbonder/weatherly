import React from 'react';
import { mount, shallow } from 'enzyme';
import Hourly from '../lib/hourly.js';
import MockData from '../lib/mock-data.js';

describe('Hourly', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Hourly data={MockData.hourly_forecast} />)
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have props', () => {
    expect(wrapper.instance().props.data).toEqual(MockData.hourly_forecast);
    expect(wrapper.instance().props.data.length).toEqual(36);
  })

  it('Should render 7 Hour components', () => {
    expect(wrapper.find('Hour').length).toEqual(7);
  })

  it('Should mount 7 Hour components', () => {
    wrapper = mount(<Hourly data={MockData.hourly_forecast} />)

    expect(wrapper.find('div.hour').length).toEqual(7);
    expect(wrapper.find('div.title-container').length).toEqual(7);
    expect(wrapper.find('h2').length).toEqual(7);
    expect(wrapper.find('img').length).toEqual(7);
    expect(wrapper.find('div.temp-container').length).toEqual(7);
    expect(wrapper.find('h5').length).toEqual(14);
  })
})
