const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const addNote = (title, body) => {
  const notes = loadNotes()
  // If filter finds a duplicate it continues until end of array
  // const duplicateNotes = notes.filter(note => note.title === title)
  const duplicateNote = notes.find(note => note.title === title)
  // debugger
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note Added!'))
  } else {
    console.log(chalk.red.inverse('Note title already taken!'))
  }
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = title => {
  let notes = loadNotes()
  const newNotes = notes.filter(note => note.title !== title)
  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse('Note Removed!'))
    saveNotes(newNotes)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const listNotes = () => {
  let notes = loadNotes()
  console.log(chalk.inverse('Your Notes:'))
  notes.forEach(note => console.log(chalk.green(note.title)))
}

const readNote = title => {
  const notes = loadNotes()
  const foundNote = notes.find(note => note.title === title)
  if (foundNote) {
    console.log(chalk.green.inverse(foundNote.title))
    console.log(chalk.green(foundNote.body))
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
