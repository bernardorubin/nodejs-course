// const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// Customize yargs version
yargs.version('1.1.0')

// If function is a method, use ES6 Method definition syntax
// Otherwise use arrow function
// It becomes an arrow function if it isn't being defined directly on an object
// Methods are defined directluy on an object
// Definining function directly on an object:
// handler: function(argv) {
//   notes.addNote(argv.title, argv.body)
// }

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create read command

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

// Create list command

yargs.command({
  command: 'list',
  describe: 'List a note',
  handler() {
    notes.listNotes()
  }
})

yargs.parse()

console.log(yargs.argv)

// const command = process.argv[2]

// if (command === 'add') {
//   console.log('Adding note!')
// } else if (command === 'remove') {
//   console.log('Removing Note!')
// }

// console.log(chalk.green.inverse('green'))

// const validator = require('validator')
// console.log(validator.isURL('https://berest.com'))

// const getNotes = require('./notes.js')
// console.log(getNotes())

// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This is the new text')
// fs.appendFileSync('notes.txt', 'This is the newer text')

// const add = require('./utils.js')
// console.log(add(2, 3))
