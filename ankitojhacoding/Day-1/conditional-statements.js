
// basic of conditional statements

// If & Else
let age = 14

if(age >= 18){
    console.log('Yopu are eligible for voting');
} else{
    console.log(`You have to wait for ${18-age} years to be eligible to vote.`);
}

// switch case in javascript

var rank = "Commander";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}

// looping statements

let arr = [1,45,76,8,9,6,4,3];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}