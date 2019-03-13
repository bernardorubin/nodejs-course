// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
// same imports as above but with destructuring:
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
console.log(id.id.length)
console.log(id.toHexString().length)
// mongo stores ids as binary data because the size compared to a string is half
// it gets saved as the value returned by a call to the function ObjectId("263253sdc6823681848164asd12") with returns the string in binary

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    db.collection('users').insertOne(
      {
        _id: id,
        name: 'Chu',
        age: 30
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user')
        }
        console.log(result.ops)
      }
    )

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

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'This is a description',
    //       completed: false
    //     },
    //     {
    //       description: 'This is a task that has been completed',
    //       completed: true
    //     }
    //   ],
    //   (error, response) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks')
    //     }
    //     console.log(response.ops)
    //   }
    // )
  }
)
