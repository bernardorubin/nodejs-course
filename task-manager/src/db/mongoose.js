const mongoose = require('mongoose')
const validator = require('validator')
// Mongoose provides a niver interface for interacting
// with MongoDB. Instead of using low level API methods for interacting directly with mongo
// Mongoose is a ODM -> Object Document Mapper
// Allows you to map your objects in the node app over to documents inside Mongo DB
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

// Define first Model (user)
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    // ES6 Method definition syntax
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})
// Create an instance
const me = new User({
  name: '      Bern         ',
  email: 'MYEMAIL@GMAIL.com    '
})
// Save to db
me.save()
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log('Error!', error)
  })

const Task = mongoose.model('Task', {
  description: { type: String, required: true },
  completed: { type: Boolean }
})

// const newTask = new Task({
//   description: 'Wash clothes',
//   completed: false
// })

// newTask
//   .save()
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// Data validation -> allow only ages greater than 18
// Data sanitization -> Alter data before saving it -> Remove empty spaces around user's name
