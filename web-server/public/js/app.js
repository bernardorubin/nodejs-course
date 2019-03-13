console.log('Client side javascript file loaded!')
// to make http request from client side javascript
// we'll use popular fetch api -> browser based api
// we can use it in all modern browsers but not accessible
// in nodejs. can't be used on a backend node script

fetch('http://localhost:3000/weather?address=boston').then(response => {
  response.json().then(data => {
    data.error
      ? console.log(data.error)
      : console.log(data.forecast, data.location)
  })
})
