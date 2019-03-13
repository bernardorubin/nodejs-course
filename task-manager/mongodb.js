// CRUD create read update delete

const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne(
    //   {
    //     name: 'Bern',
    //     age: 29
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    //   }
    // )

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Bern',
    //       age: 29
    //     },
    //     {
    //       name: 'Chuy',
    //       age: 29
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    //   }
    // )

    db.collection('tasks').insertMany(
      [
        {
          description: 'This is a description',
          completed: false
        },
        { description: 'This is a task', completed: true }
      ],
      (error, response) => {
        if (error) {
          return console.log('Unable to insert tasks')
        }
        console.log(response.ops)
      }
    )
  }
)
