// Currying in Javascript

// function sum (a,b,c){
//     let result = a+b+c;
//     console.log(result);
// }
// sum(1,223,2)

function sum(a){
    return function addNext(b){
        return function addThird(c){
            let res = a+b+c;
            console.log(res);
        }
    }
}

// const one = sum(1);
// const two = one(2);
// const three = two(5);
// three;

sum(1)(2)(3);