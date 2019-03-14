const mongoose = require('mongoose')
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
    type: String
  },
  age: {
    type: Number
  }
})
// Create an instance
const me = new User({
  name: 'Bern',
  age: 29
})
// Save to db
me.save()
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
