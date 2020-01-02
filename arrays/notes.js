const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())//remove last item
// notes.push('My new note')//add to the end

// console.log(notes.shift())//remove first item
// notes.unshift('My first note')//add to the beginning

// notes.splice(1, 1, 'This is the new second item')//start at index 1 and remove item(s) or add new item(s)

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

