

const arr1 = [12,34,56,7,8,98,65]

function print(i){
    console.log(i);
}

// arr1.forEach(print)

arr1.forEach((val)=> console.log(val)) // bot will work fine

console.log("\n");

let newArr = []
arr1.forEach((val)=> newArr.push(val*2))
newArr.forEach((val)=> console.log(val));
