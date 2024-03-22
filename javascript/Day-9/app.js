
const clock = document.getElementById('clock')
const btnStop = document.getElementById('btnStop')

function timer(){
    const currentTime = new Date();

    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    clock.innerText = time;
}

timer()

// setTimeout & setInterval

const interval= setInterval(timer, 1000)

setTimeout(()=>{
    console.log('Updating after 2 seconds');
},2000)


btnStop.addEventListener('click',()=>{
    clearInterval(interval)
})