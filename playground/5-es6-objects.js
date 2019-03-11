// Object property shorthand

const name = 'Andrew'
const userAge = 27

// const user = {
//   name: name,
//   age: userAge,
//   location: 'Philadelphia'
// }

//Shorthand

const user = {
  name,
  age: userAge,
  location: 'Philadelphia'
}

console.log(user)

// Object destructuring
// extract object properties and their values
// into individual variables
const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}
// instead of a product price property I could
// have a price variable with the value of 'red notebook'

// const label = product.label
// const stock = product.stock
// now we have a label and stock variables that we can
// access throughout the rest of the program
// without having to grab it off of the object
// everytime we want to use it

// To avoid writing so much code we use destructuring
// with destructuring we extract properties off of an object
// creating individual variables that store those property values
// you can also set a default value

// const { label: productLabel, stock, rating = 5 } = product

// console.log(productLabel, stock, rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)
