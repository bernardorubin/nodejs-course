// callback
const doWorkCallBack = callback => {
  setTimeout(() => {
    callback('This is my error', undefined)
    // callback(undefined, [1, 4, 7])
  }, 2000)
}

doWorkCallBack((error, result) => {
  if (error) {
    return console.log(error)
  }
  console.log(result)
})

//callbacks can be called twice, promises if rejected or resolved exit the function

// promises
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([7, 4, 1])
    reject('Things went wrong!')
  }, 2000)
})

// promises -> pending, fulfilled or rejected
doWorkPromise
  .then(result => {
    // only gets exectuted when things go well
    console.log('Great Success!', result)
  })
  .catch(error => {
    console.log('Error!', error)
  })
