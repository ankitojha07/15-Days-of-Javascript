// Async => Non blocking
const fs = require("node:fs")

console.log("Starting the execution!");


fs.readFile("copy.txt", "utf-8", (err, data)=>{
    if(err) console.log("Error: ",err);
    else console.log(data);
})

console.log("Ending the execution!");

// in this case the output will be:
// 1st -> Starting the execution!
// 2nd -> Ending the execution!
// 3rd -> {{Content of the file}}