const fs = require("node:fs")

console.log("Starting the execution of the File!");


const content = "Hello,\nthis is content that I want to insert to my text file.\nAnkit Ojha."
// fs.writeFileSync("copy.txt", content, "utf-8") // inserted

fs.appendFileSync("copy.txt", "\n1", "utf-8")

// Sync: Blocking operations!
const readContent = fs.readFileSync("copy.txt", "utf-8")
console.log(readContent)

console.log("Execution completed!!!");

// so here the output will be
// First -> 1st Console log
// 2nd -> The output of the file content
// 3rd -> The last console log (ending of the execution.)
