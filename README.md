# Weatherly - Alex Bonder, Jordan Quinn - (FE Mod 2)

## Synopsis

This project was our first using React. React takes all the best parts of JavaScript and HTML and pushes them together. I found the component structure of React to make the whole project much easier to understand. Passing information around became much simpler. This project was also our first experience using an API we used the data from The Weather Underground to have live data for whichever city we looked up. We utilized the Complete-Me project to allow autocompletion of cities and zip codes. This project used all of the moving parts to create a weather app. 

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

```javascript
// /lib/api-key.js

export default '(your API key)';
```

Run `npm start` and visit localhost:8080 in your browser

You can begin running your tests with `npm test`

## Built With

React
[WeatherUnderground](https://www.wunderground.com/) API
[CompleteMe](https://github.com/lexbonder/complete-me) project for auto-complete in search bar.

## Authors

Alex Bonder [GitHub](https://github.com/lexbonder) [LinkedIn](https://www.linkedin.com/in/lexbonder/)

Jordan Quinn [GitHub](https://github.com/JordanPQuinn) [LinkedIn](https://www.linkedin.com/in/jordanpquinn/)
------





## Tests

The testing Enzyme documentation is helpful for this project:
[create-react-app
setupTests.js](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment)  
[initializing the enzyme adapter](http://airbnb.io/enzyme/docs/installation/react-15.html)

The tests are a compilation of unit and integration tests to simulate the methods and events happening in the application.

## Contributors

Alex Bonder and Casey Dallavalle are the project developers.

## Project layout

<img width="1329" alt="screen shot 2018-01-29 at 9 51 16 am" src="https://user-images.githubusercontent.com/28467245/35522655-2c4a719a-04da-11e8-9766-7b576b599150.png">

<img width="1332" alt="screen shot 2018-01-29 at 9 51 28 am" src="https://user-images.githubusercontent.com/28467245/35522656-2c5f19e2-04da-11e8-98fc-777c80c58833.png">

<img width="1327" alt="screen shot 2018-01-29 at 9 51 44 am" src="https://user-images.githubusercontent.com/28467245/35522657-2c71e842-04da-11e8-84f2-88b6c7b12b27.png">

Jordan Quinn [GitHub](https://github.com/JordanPQuinn) [LinkedIn](https://www.linkedin.com/in/jordanpquinn/)
