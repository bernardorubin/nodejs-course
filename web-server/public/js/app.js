console.log('Client side javascript file loaded!')
// to make http request from client side javascript
// we'll use popular fetch api -> browser based api
// we can use it in all modern browsers but not accessible
// in nodejs. can't be used on a backend node script

const fetchData = address => {
  fetch('http://localhost:3000/weather?address=' + address).then(response => {
    response.json().then(data => {
      data.error
        ? console.log(data.error)
        : console.log(data.forecast, data.location)
    })
  })
}

const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

weatherForm.addEventListener('submit', e => {
  e.preventDefault()
  const location = search.value
  fetchData(location)
  console.log(location)
})
