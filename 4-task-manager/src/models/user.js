const mongoose = require('mongoose')
const validator = require('validator')

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
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      // if (value.length <= 6) {
      //   throw new Error('Password length must be greater than 6')
      // }
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cant contain password')
      }
    }
  }
})

module.exports = User
