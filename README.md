# Weatherly - Alex Bonder, Jordan Quinn - (FE Mod 2)

## Synopsis

Weatherly is an app that allows the user to search any city and get real time weather information. They are given current weather, a 7 Day forecast, and a 10 Hour Forecast.

This project was our first using React and an API

## Project Goals

* Learn React
* Learn to consume and utilize data from an API
* Use propTypes to validate props passed to each component.
* Write meaningful, comprehensive unit and integration tests.

## Installation

This application was built using the `create-react-app` boilerplate. This boilerplate provides a lot of built in content and dependencies for free. The [documentation](https://github.com/facebookincubator/create-react-app) is avialable to read through.

To set up: 

Fork or clone this project

Run `npm install` from the root directory

You will need an API key from [WeatherUnderground](https://www.wunderground.com/)

In `/lib` add a file called `api-key.js`

Add the following...

```javascript
// /lib/api-key.js

export default '(your API key)';

// Remember to add this file to your .gitignore
```

Run `npm start` and visit localhost:8080 in your browser

You can begin running your tests with `npm test`

## Built With

React
[WeatherUnderground](https://www.wunderground.com/) API
[CompleteMe](https://github.com/lexbonder/complete-me) project for auto-complete in search bar.

## Tests

The tests are a compilation of unit and integration tests to simulate the methods and events happening in the application.

## Contributors

Alex Bonder [GitHub](https://github.com/lexbonder) [LinkedIn](https://www.linkedin.com/in/lexbonder/)

Jordan Quinn [GitHub](https://github.com/JordanPQuinn) [LinkedIn](https://www.linkedin.com/in/jordanpquinn/)

## Screenshots

![Landing Page](screenshots/weatherly.png)
