
// below is the code to find the largest element of the array
const arr1 = [12,34,56,7,8,98,65]

let temp = 0;
for(let i =0; i<arr1.length; i++){
    if(arr1[i]>temp){
        temp = arr1[i];
    }
}
console.log(temp);