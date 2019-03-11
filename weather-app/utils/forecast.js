const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/1c6718a83ce0b425d1f779d8e406db74/' +
    latitude +
    ',' +
    longitude +
    '?units=si&lang=es'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          ' It is currently ' +
          response.body.currently.temperature +
          ' degrees out there is a ' +
          response.body.currently.precipProbability +
          '% chance of rain'
      )
    }
  })
}

module.exports = forecast
