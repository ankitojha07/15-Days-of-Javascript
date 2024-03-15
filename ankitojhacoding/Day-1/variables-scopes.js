console.log("hello Javascript");

console.log('====================================');
console.log(`Let's Start with 15 days of Javascript Challenege!!!`);
console.log('====================================');

// let, var and const

// scope of var = Global Scope
var a = 20;
if(true){
    console.log(a);
}
console.log(a);


// let keyword
let b = 21;           // if you remove this then it will cause error because fo line 23
{
    let b = 21;
    console.log(b);
}
console.log(b);

// const

const myName = "Ankit" // this can't be changed

// cannot re assigned values
// myName = "Aman" -> Error

