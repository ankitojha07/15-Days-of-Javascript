
// Synchronous and Asynchronous JS

let a = 10;
let b = 20;

let sum = a +b;


// async function getData(){
//     let restults = await fetch('https://jsonplaceholder.typicode.com/posts');
//     console.log(restults);
// }

fetch('https://jsonplaceholder.typicode.com/posts')
.then((data)=>{
    console.log(data.json());
})
.catch((e)=>{
    console.log(e);
})
.finally(()=>{
    console.log('You data has been fetched successfully');
})

// getData();
console.log(sum);
