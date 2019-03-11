// this is a callback and is asynchronous
// setTimeout is a node provided API
setTimeout(() => {
  console.log('Two seconds are up')
}, 2000)
// a callback is a function we provide to another function as an argument with the intention of having it called later on
// forEach and filter use callback pattern but are not asynchronous
const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter(name => {
  return name.length <= 4
})

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }

    callback(data)
  }, 2000)
}

geocode('Philadelphia', data => {
  console.log(data)
})

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 2000)
}

add(1, 4, sum => {
  console.log(sum) // Should print: 5
})
