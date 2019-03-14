// HTTP example request without a library (request, axios or other libraries) using pure node
// https://nodejs.org/dist/latest-v11.x/docs/api/http.html
const https = require('https')

const url =
  'https://api.darksky.net/forecast/1c6718a83ce0b425d1f779d8e406db74/40,-75?units=si&lang=es'

const request = https.request(url, response => {
  let data = ''
  response.on('data', chunk => {
    data = data + chunk.toString()
  })
  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', error => {
  console.log('An error:', error)
})

request.end()

// Node comes bundled with NPM because you're supposed to be using NPM modules
