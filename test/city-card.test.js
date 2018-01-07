import React from 'react';
import { mount, shallow } from 'enzyme';
import CityCard from '../lib/CityCard.js';
import MockData from '../lib/mock-data.js';

describe('CityCard', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<CityCard data={MockData} chosenCity='Louisville, KY' />)
  })

  it('Should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have default state', () => {
    expect(wrapper.state()).toEqual({
      forecastToDisplay: '',
      hourlySelect: 'selected',
      tenDaySelect: ''
    })
  })

  it('Should change the state based on the component clicked', () => {
    expect(wrapper.state().hourlySelect).toEqual('selected')
    expect(wrapper.state().tenDaySelect).toEqual('')

    wrapper.find('#tenDayButton').simulate('click');

    expect(wrapper.state().hourlySelect).toEqual('')
    expect(wrapper.state().tenDaySelect).toEqual('selected')

    wrapper.find('#hourlyButton').simulate('click');
    
    expect(wrapper.state().hourlySelect).toEqual('selected')
    expect(wrapper.state().tenDaySelect).toEqual('')
  })

  it('Should pull up data for the correct city', () => {
    expect(wrapper.instance().props.chosenCity).toEqual('Louisville, KY')
    expect(wrapper.instance().props.data.current_observation.display_location.full).toEqual('Louisville, KY')
  })

  it('Should start rendering only an Hourly component', () => {
    expect(wrapper.find('Hourly').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(0);
  })

  it('Should render the Hourly or TenDay component when clicked', () => {
    expect(wrapper.find('Hourly').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(0);

    wrapper.find('#tenDayButton').simulate('click');

    expect(wrapper.find('Hourly').length).toEqual(0);
    expect(wrapper.find('TenDay').length).toEqual(1);

    wrapper.find('#hourlyButton').simulate('click');

    expect(wrapper.find('Hourly').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(0);
  })
})