// Async functions only return a promise
// The promise is fulfilled with the value you choose to return from the function
// const doWork = async () => {}

// // Returns Promise { undefined}
// console.log(doWork())

// // Simplest async example
// const doWork = async () => {
//   throw new Error('Something failed')
//   return 'Bern'
// }

// doWork()
//   .then(result => {
//    Returns a Promise
//     console.log('result:', result)
//   })
//   .catch(e => {
//     console.log('Error:', e)
//   })

// With async await you don't have to change how your promises work, just the way you work with your promises
// If there's a promise you can use async/await

// Example of a basic promise
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject('No negative numbers')
      }
      resolve(a + b)
    }, 2000)
  })
}

// With async await
// We use code that looks synchronous to performa an asynchronous task
const doWork = async () => {
  // so there is no need to provide a then method call, provide
  // my callback function and get access to result .then(result =>)
  // you can access the value that the promise is fulfilled with
  const sum = await add(1, 99)
  const sum2 = await add(sum, 100)
  const sum3 = await add(sum2, -200)
  return sum3
}

// It looks even better than promise chaining ->
// add(1, 99)
//   .then(sum => {
//     console.log(sum)
//     return add(sum, 100)
//   })
//   .then(sum2 => console.log(sum2))
//   .catch(e => console.log(e))

// Also with async/await we have access to all the sum values in the same scope, with
// chaining that's a mess. We would have to create variables in the parent scope
// and then reassign them inside each then callback

// We handle async await like any other promise
doWork()
  .then(result => {
    console.log('result:', result)
  })
  .catch(e => {
    console.log('Error:', e)
  })
