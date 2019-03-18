const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/users', async (req, res) => {
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

router.get('/users', async (req, res) => {
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

router.get('/users/:id', async (req, res) => {
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

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  )

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    // To use mongoose middleware we have to change this
    // findByIdAndUpdate bypassses mongoose and performs a direct operation on the db

    const user = await User.findById(req.params.id)

    updates.forEach(update => {
      // Bracket notation to access a property dinamically
      user[update] = req.body[update]
    })
    await user.save()
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true
    // })

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/users/:id', async (req, res) => {
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

module.exports = router
