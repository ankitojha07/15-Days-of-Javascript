
// accessing HTML elements using DOM in Javascript

// Document object
console.log(document.body);

// selecting elelment using querySelector
let div = document.querySelector("div");

console.log(div.innerHTML); // print the code of div tag
console.log(div.innerText); // print tghe content of the div tag

div.innerHTML = "<p>This is the text that has been inserted through DOM</p>" // it will remove previous content and add this

// creatring elements using JS

let name1 = document.createElement("div");
name1.innerHTML = "<h1>I have beed sent through DOM</h1>"
name1.className = "red"
div.append(name1)