// FS module in js
// node introduces 'node:' just to make sure you are importing the node module not any third party module.
// node:fs -> built in package
const fs = require('node:fs')

// now you will see every function has a sync versions of it
// sync means -> blocking method: means it will complete the task and then only move ahead.
const data = fs.readFileSync("notes.txt", 'utf-8')
console.log(data);

// write file SYnc is used to create a new file with the content provided.
// if the file is already available, it will override the whole file with new content.
// fs.writeFileSync("copy.txt", "I want to write this usig the js code.", "utf-8")

// To append the content, use appendFileSync
// fs.appendFileSync("copy.txt", "this is the content to appned using the append file sync in js.", "utf-8")
// const readNew = fs.readFileSync("copy.txt", "utf-8")
// console.log(readNew);


// how to create a directory?
// fs.mkdirSync("games")

// now you want to Hierarchy of folders inside this?
// fs.mkdirSync("games/xyz/a",{recursive:true})
// fs.mkdirSync("games/xyz/b",{recursive:true})
// fs.mkdirSync("games/second",{recursive:true})
// fs.mkdirSync("games/second/1",{recursive:true})
// fs.mkdirSync("games/second/2",{recursive:true})

// how to delete a directory?
// fs.rmdirSync("games") // we cannot delete a directory which is not empty, so first delete the innner ones
// fs.rmdirSync("games/second/1")
// fs.rmdirSync("games/second/2")
// fs.rmdirSync("games/second")

// fs.rmdirSync("games/xyz/a")
// fs.rmdirSync("games/xyz/b")
// fs.rmdirSync("games/xyz")