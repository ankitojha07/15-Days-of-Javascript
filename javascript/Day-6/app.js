

const ipName = document.getElementById('ipName')
const btnSubmit = document.getElementById('btnSubmit')
const username = document.getElementById('username')


btnSubmit.addEventListener('click',()=>{
    const value = ipName.value;
    console.log(value);
    localStorage.setItem('name',value)
    location.reload();
})

window.addEventListener('load',()=>{
    username.innerText = localStorage.getItem('name');
})