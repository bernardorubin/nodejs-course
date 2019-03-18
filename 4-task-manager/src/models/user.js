const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
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

// Add middleware for encryption
userSchema.pre('save', async function(next) {
  // we don't use arrow function because it doesn't bind to this
  const user = this
  console.log('just before saving!')
  next()
})

// Define first Model (user)
const User = mongoose.model('User', userSchema)

module.exports = User
