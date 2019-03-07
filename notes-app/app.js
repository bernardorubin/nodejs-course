const chalk = require('chalk')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

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
  handler: function(argv) {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  }
})

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note')
  }
})

// Create read command

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function() {
    console.log('Reading the note')
  }
})

// Create list command

yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function() {
    console.log('List your notes')
  }
})

yargs.parse()

// console.log(yargs.argv)

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
