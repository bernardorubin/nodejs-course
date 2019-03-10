const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'Your Notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
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

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
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

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}
