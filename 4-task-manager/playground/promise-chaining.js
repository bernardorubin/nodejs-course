require('../src/db/mongoose')
const User = require('../src/models/user')

// mongoose allows us to omit the $set update operator from the mongodb native driver
User.findByIdAndUpdate('5c8ab6516ec12c34d900cc2b', { age: 1 })
  .then(user => {
    console.log(user)
    return User.countDocuments({ age: 1 })
  })
  .then(result => {
    console.log(result)
  })
  .catch(e => console.log(e))
