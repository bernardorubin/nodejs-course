const request = require('request')
const geocode = require('./utils/geocode')
const url =
  'https://api.darksky.net/forecast/1c6718a83ce0b425d1f779d8e406db74/37.8267,-122.4233?units=si&lang=es'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    console.log(
      response.body.daily.data[0].summary +
        ' It is currently ' +
        response.body.currently.temperature +
        ' degrees out there is a ' +
        response.body.currently.precipProbability +
        '% chance of rain'
    )
  }
})

// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmVybmFyZG9ydWJpbiIsImEiOiJjanQzcDZpcXkwdGNtNGFwYzFsY2V4NnBhIn0.RNGuEJDUebMgSd1d0T_1UQ&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to location services!')
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.')
//   } else {
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]
//     console.log(latitude, longitude)
//   }
// })

geocode('Mexico City', (error, data) => {
  console.log('Error: ', error)
  console.log('Data: ', data)
})
