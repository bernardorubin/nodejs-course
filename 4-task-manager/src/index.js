const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
// Get PORT value for herokue deployment from process.env.PORT
const port = process.env.PORT || 3000

// Automatically parses incoming json to an object so we can access it in our request handlers
app.use(express.json())

app.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user)
  //   })
  //   .catch(error => {
  //     // res.status(400)
  //     // res.send(error)
  //     // In One line ->
  //     // res.send(error, 400)
  //     res.status(400).send(error)
  //   })
})

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (e) {
    res.status(500).send()
  }
  // // Fetch all users via promise that find returns
  // User.find({})
  //   .then(users => {
  //     res.status(200).send(users)
  //   })
  //   .catch(error => {
  //     res.status(500).send()
  //   })
})

app.get('/users/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id)

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
  // // Mongoose automatically converts the ID so that we don't have to convert it for mongo
  // User.findById(_id)
  //   .then(user => {
  //     if (!user) {
  //       return res.status(404).send()
  //     }
  //     res.status(200).send(user)
  //   })
  //   .catch(error => {
  //     res.status(500).send(error)
  //   })
})

app.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  )

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
})

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task)
  //   })
  //   .catch(error => {
  //     res.status(400).send(error)
  //   })
})

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.send(tasks)
  } catch (e) {
    res.status(500).send()
  }
  // Task.find({})
  //   .then(tasks => {
  //     res.status(200).send(tasks)
  //   })
  //   .catch(error => {
  //     res.status(500).send(error)
  //   })
})

app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const task = await Task.findById(_id)

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
  // Task.findById(_id)
  //   .then(task => {
  //     if (!task) {
  //       return res.status(404).send()
  //     }
  //     res.status(200).send(task)
  //   })
  //   .catch(error => {
  //     res.status(500).send(error)
  //   })
})

app.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed']
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  )

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)

    if (!task) {
      res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})

app.listen(port, () => {
  console.log('Server Running on port ' + port)
})
