// FS module in js
// node introduces 'node:' just to make sure you are importing the node module not any third party module.
// node:fs -> built in package
const fs = require('node:fs')

// now you will see every function has a sync versions of it
// sync means -> blocking method: means it will complete the task and then only move ahead.
const data = fs.readFileSync("notes.txt", 'utf-8')
console.log(data);


fs.writeFileSync("copy.txt", "I want to write this usig the js code.", "utf-8")