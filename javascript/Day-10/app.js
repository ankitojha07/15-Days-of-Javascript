// Closures in Javascript

// 1- Lexical Scope : ability for a function scope to 
// access variables from the parent scope

// function mainFunc(myName){

//     function printName(){
//         console.log(myName);
//     }

//     return printName
// }

// const myFunc = mainFunc('Rahul');
// myFunc();

function sum(a){
    function innerFunc(b){
        let finalSum = a+b;
        console.log(finalSum);
    }
    return innerFunc;
}

const result = sum(4);
result(16);
result(20);
result(40)