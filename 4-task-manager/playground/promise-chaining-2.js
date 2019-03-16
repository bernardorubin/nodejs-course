require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5c89f7b43458e027a4e65e30')
  .then(task => {
    console.log(task)
    return Task.countDocuments({ completed: false })
  })
  .then(result => console.log(result))
  .catch(e => console.log(e))

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id)
  // const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5c89f80e8a252827b3dbfac8')
  .then(count => {
    console.log(count)
  })
  .catch(e => console.log(e))
