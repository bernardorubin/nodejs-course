require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5c89f7b43458e027a4e65e30')
  .then(task => {
    console.log(task)
    return Task.countDocuments({ completed: false })
  })
  .then(result => console.log(result))
  .catch(e => console.log(e))
