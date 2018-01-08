function getCurrentForecast(data) {
  const currentForecast = {
    cityName: data
      .current_observation
      .display_location
      .full,
    time: data
      .current_observation
      .observation_time,
    lowTemp: data
      .forecast
      .simpleforecast
      .forecastday[0]
      .low
      .fahrenheit,
    currentTemp: data
      .current_observation
      .temp_f,
    conditions: data
      .forecast
      .simpleforecast
      .forecastday[0]
      .conditions,
    image: data
      .forecast
      .simpleforecast
      .forecastday[0]
      .icon_url,
    highTemp: data
      .forecast
      .simpleforecast
      .forecastday[0]
      .high
      .fahrenheit,
    description: data
      .forecast
      .txt_forecast
      .forecastday[0]
      .fcttext
  };

  return currentForecast;
}

function getHourlyForecast(data) {
  const allHours = data.hourly_forecast;
  const sevenHoursArray = [];

  allHours.forEach( (hour, index) => {
    if (index < 7) {
      sevenHoursArray.push({
        time: hour.FCTTIME.civil,
        icon: hour.icon_url,
        condition: hour.condition,
        temp: hour.temp.english
      });
    }
  });
  return sevenHoursArray;
}

function getDailyForecast(data) {
  const allDays = data
    .forecast
    .simpleforecast
    .forecastday;
  const tenDayArray = [];

  allDays.forEach( (day) => {
    tenDayArray.push({
      month: day.date.month,
      day: day.date.day,
      year: day.date.year,
      icon: day.icon_url,
      lowTemp: day.low.fahrenheit,
      highTemp: day.high.fahrenheit
    });
  });
  return tenDayArray;
}

export default function dataCleaner(data) {
  const currentForecast = getCurrentForecast(data);
  const hourlyForecast = getHourlyForecast(data);
  const dailyForecast = getDailyForecast(data);

  return {currentForecast, hourlyForecast, dailyForecast};
}