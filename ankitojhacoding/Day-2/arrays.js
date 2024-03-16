

const arr1 = [12,34,56,7,8,98,65]

function print(i){
    console.log(i);
}

// for Each in JS

// arr1.forEach(print)

arr1.forEach((val)=> console.log(val)) // both will work fine

console.log("\n");

let newArr = []
arr1.forEach((val)=> newArr.push(val*2))
newArr.forEach((val)=> console.log(val));

console.log("\nusing map function in JS");

// --------------------------------------------------------------------------------
// Map function in javascript

const arr2 = [12,34,56,7,8,98,65]
arr1.map((val)=>{
    console.log("H",val);
})

const newArr2 = arr2.map((val)=>{
    return val*2;
})
console.log("\nPrinting new Array 2 values after map function : \n");

newArr2.forEach((val)=> console.log(val))