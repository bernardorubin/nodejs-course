const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

// How to add the result after it has been received
add(1, 2)
  .then(sum => {
    console.log(sum)
    add(sum, 5)
      .then(sum2 => console.log(sum2))
      .catch(e => console.log(e))
  })
  .catch(e => {
    console.log(e)
  })

// 2 asynchronous tasks above
// The above promise works but looks similar to nesting callbacks

// Better solution: Promise Chaining ->
add(1, 1)
  .then(sum => {
    console.log(sum)
    // when you return a promise from your then callaback allowing you to chain another then call on
    return add(sum, 4)
  })
  .then(sum2 => console.log(sum2))
  .catch(e => console.log(e))
