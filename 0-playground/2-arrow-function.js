// Old syntax
// const square = function(x) {
//   return x * x
// }
// ES6
// const square = x => {
//   return x * x
// }
// Shorthand
// const square = x => x * x

// console.log(square(3))
// ----------------------------------
// const event = {
//   name: 'Birthday Party',
//   printGuestList: function() {
//     console.log('Guest list for ' + this.name)
//     // returns this.name undefined
//   }
// }

// const event = {
//   name: 'Birthday Party',
//   printGuestList: () => {
//     console.log('Guest list for ' + this.name)
//     // returns this.name undefined
//   }
// }
// const event = {
//   name: 'Birthday Party',
//   printGuestList: () => {
//     console.log('Guest list for ' + this.name)
//     // returns this.name undefined
//   }
// }

const event = {
  name: 'Birthday Party',
  guestList: ['John', 'Jen', 'Mike'],
  // ES6 function for defining methods on objects definition with this binding
  printGuestList() {
    console.log('Guest list for ' + this.name)
    // this.guestList.forEach(function(guest) {
    //   console.log(guest + ' is attending ' + this.name)
    //   // returns John is attending undefined
    // })
    this.guestList.forEach(guest => {
      console.log(guest + ' is attending ' + this.name)
      // returns John is attending undefined
    })
  }
}

// Arrow functions don't bind their own this value
// that makes them poor candidates for methods
// but great candidates for everything else

event.printGuestList()
