const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000 // Get PORT value for heroku deployment from process.env.PORT

app.use(express.json()) // Automatically parses incoming json to an object so we can access it in our request handlers
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server Running on port ' + port)
})
