const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
// Get PORT value for herokue deployment from process.env.PORT
const port = process.env.PORT || 3000

// Automatically parses incoming json to an object so we can access it in our request handlers
app.use(express.json())

app.post('/users', (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then(() => {
      res.status(201).send(user)
    })
    .catch(error => {
      // res.status(400)
      // res.send(error)
      // In One line ->
      // res.send(error, 400)
      res.status(400).send(error)
    })
})

app.get('/users', (req, res) => {
  // Fetch all users via promise that find returns
  User.find({})
    .then(users => {
      res.status(200).send(users)
    })
    .catch(error => {
      res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
  const _id = req.params.id
  // Mongoose automatically converts the ID so that we don't have to convert it for mongo
  User.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send()
      }
      res.status(200).send(user)
    })
    .catch(error => {
      res.status(500).send(error)
    })
})

app.post('/tasks', (req, res) => {
  const task = new Task(req.body)
  task
    .save()
    .then(() => {
      res.status(201).send(task)
    })
    .catch(error => {
      res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {
  Task.find({})
    .then(tasks => {
      res.status(200).send(tasks)
    })
    .catch(error => {
      res.status(500).send(error)
    })
})

app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id
  Task.findById(_id)
    .then(task => {
      if (!task) {
        return res.status(404).send()
      }
      res.status(200).send(task)
    })
    .catch(error => {
      res.status(500).send(error)
    })
})

app.listen(port, () => {
  console.log('Server Running on port ' + port)
})