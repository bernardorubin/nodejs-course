// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
// same imports as above but with destructuring:
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)
// // mongo stores ids as binary data because the size compared to a string is half
// // it gets saved as the value returned by a call to the function ObjectId("263253sdc6823681848164asd12") with returns the string in binary

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    db.collection('tasks')
      .updateMany(
        {
          completed: false
        },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log(result.modifiedCount)
      })
      .catch(error => {
        console.log(error)
      })

    // const updatePromise = db.collection('tasks').updateOne(
    //   {
    //     _id: new ObjectID('5c895a748313b60d57f8b286')
    //   },
    //   // {
    //   //   $set: { name: 'Burnubii' }
    //   // }
    //   {
    //     $inc: { age: -1 }
    //   }
    // )
    // updatePromise
    //   .then(result => {
    //     console.log(result)
    //     // modifiedCount equals 0 when nothing was updated
    //     console.log(result.modifiedCount)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    // db.collection('tasks').findOne(
    //   {
    //     _id: new ObjectID('5c895a748313b60d57f8b286')
    //   },
    //   (error, task) => {
    //     if (error) {
    //       return console.log('Error')
    //     }
    //     console.log(task)
    //   }
    // )

    // // toArray actually goes into the server and fetches the array
    // // find only returns a pointer to which we can perform functions
    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks)
    //   })

    // db.collection('users').findOne(
    //   { _id: new ObjectID('5c88a842c8a5e80abe290310') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    //   }
    // )

    // // find, different to findOne returns a cursor which is a pointer not the actual andoid and we can do  things with it
    // // We can limit the data with limit or count the data
    // // or convert data to an array
    // db.collection('users')
    //   .find({ age: 29 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log('Unable to fetch')
    //     }
    //     console.log(users)
    //   })
    // db.collection('users')
    //   .find({ age: 29 })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log('Unable to fetch')
    //     }
    //     console.log(count)
    //   })

    // db.collection('users').insertOne(
    //   {
    //     _id: id,
    //     name: 'Chu',
    //     age: 30
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
