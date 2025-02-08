console.log('A' - 1); // Nan
console.log('A' + 1); // A1
console.log(true + 1); // 2

// --------------------------------------------------------------------------------------------------------------------

// In JavaScript, object keys must be either strings or symbols.
// When an object (like c) is used as a key in another object (x), JavaScript implicitly converts it to a string.
// Specifically, when an object is used as a key, JavaScript converts it to "[object Object]".

let x = {};

let a = {
    name: "Ankit"
};

let b = {
    name: "Aman"
}

let c = {
    name: "Rahul"
}

x[c] = {
    name: "Modi"
}

console.log(x[a]);

// --------------------------------------------------------------------------------------------------------------------

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

console.log(undefined == null); // true
console.log(undefined === null); // false

console.log(typeof null); // object

console.log(typeof undefined); // undefined

console.log(typeof NaN); // number

console.log(typeof Infinity); // number

console.log(typeof -Infinity); // number

console.log("This (1/0) is NaN : " + typeof 1 / 0); // number

console.log(typeof 1 / 0 === Infinity); // false

console.log(typeof 1 / 0 === -Infinity); // false

console.log(typeof 1 / 0 === NaN); // false

console.log(typeof 1 / 0 === Infinity); // false

console.log(true / 0);
















