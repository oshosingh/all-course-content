const fs = require('fs')

// fs.writeFileSync('notes.txt', 'Test file')
fs.appendFileSync('notes.txt', '\nAppend text')