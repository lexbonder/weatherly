import Key from './api-key.js';
const root = 'http://api.wunderground.com/api/';

export default function apiGet (city) {
  return fetch(
    `${root}${Key}/geolookup/conditions/hourly/forecast10day/q/${city}.json`)
         .then( response => response.json() );
}
