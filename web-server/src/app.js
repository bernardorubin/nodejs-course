const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define Paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  // res.send('<h1>Weather</h1>')
  res.render('index', {
    name: 'Bern',
    title: 'Weather app'
  })
})

app.get('/about', (req, res) => {
  // res.send('<h1>About</h1>')
  res.render('about', {
    title: 'about',
    name: 'bernuli'
  })
})

app.get('/help', (req, res) => {
  // // express automatically detects we are sending an object
  // // and automatically parses it and converts it to JSON
  // res.send([{ name: 'Andrew', age: 27 }, { name: 'Bern', age: 29 }])
  res.render('help', {
    message: 'help me please'
  })
})

app.get('/weather', (req, res) => {
  console.log(req)
  res.send({
    forecast: 'something',
    location: 'something'
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
