

// manipulating HTML through JS

// function handleBtnClick(){
//     console.log('Clicked');
//     alert('You have just clicked me')
// }

// const btn1 = document.getElementById("btnClick")
// btn1.addEventListener("click", function(){
//     console.log('Clicked again');
// })

// same call back function as arrow function
const btn2 = document.getElementById("btnClick")
const nameBlock = document.getElementById('name-block')

// btn2.addEventListener("click", ()=> {
//     nameBlock.style.color = "blue"
// })

const container = document.getElementById('my-container');
btn2.addEventListener("click", ()=>{
    const el = document.createElement("h1")
    el.innerHTML = "Ankit Ojha Coding"
    container.appendChild(el)
})
