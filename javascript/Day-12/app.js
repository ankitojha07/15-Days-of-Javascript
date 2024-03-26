// Day 12 - 15 Days of JS

// "this" keyword in javascript

// const obj = {
//     count :123,
//     func : function(){
//         return this.count
//     }
// }

// console.log(obj.func());


// function test(){
//     console.log(this);
// }

// test()

function Video(title){
    this.title = title
    console.log(this.title);
}

const v = new Video('day 12')