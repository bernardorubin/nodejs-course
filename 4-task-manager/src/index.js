const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000 // Get PORT value for heroku deployment from process.env.PORT

// Add Middleware
// app.use((req, res, next) => {
//   console.log(req.method, req.path)
//   next()
// })

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down. Check back soon!')
// })

// without middleware: new request -> run route handler
// with middleware: new request -> do something -> run route handler

app.use(express.json()) // Automatically parses incoming json to an object so we can access it in our request handlers
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server Running on port ' + port)
})
