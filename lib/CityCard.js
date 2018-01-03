import React from 'react';

export default function CityCard(props) {
  return (
    <div>
      <h1> Current City: {props.data.current_observation.display_location.full} </h1>
      <h1> Current Condition: {props.data.forecast.simpleforecast.forecastday[0].conditions}
        <img src={props.data.forecast.simpleforecast.forecastday[0].icon_url} />
      </h1>
      <h1> Current Date: {props.data.forecast.simpleforecast.forecastday[0].date.pretty} </h1>
      <h1> Summary: {props.data.forecast.txt_forecast.forecastday[0].fcttext_metric} </h1>
      <h1> Current Temperature: {props.data.current_observation.temp_f}°F </h1>
      <h1> Daily High: {props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit}°F </h1>
      <h1> Daily Low: {props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit}°F </h1>
    </div>
  )
}