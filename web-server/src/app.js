const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
  // express automatically detects we are sending an object
  // and automatically parses it and converts it to JSON
  res.send([{ name: 'Andrew', age: 27 }, { name: 'Bern', age: 29 }])
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/weather', (req, res) => {
  console.log(req)
  res.send('Weather page')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
