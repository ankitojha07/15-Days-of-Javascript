console.log('Hello Day 2');

// functions in Javascript

function add(a,b){
    let result = a+b;
    return result;
}

let sum = add(12,45);
console.log(sum);

// how to pass callback function to a function


// high order function -> cb is a callback function
function sumOf(num1, num2, addMore){
    let result = num1+num2;
    if(result > 50) addMore(result)
}

let finalRes = sumOf(10,+45, (val)=>console.log(val+100));

// arrow functions

const doSome = (a)=>{
    let r = a*5
    return r;
}

let someResult = doSome(12);
console.log(someResult);