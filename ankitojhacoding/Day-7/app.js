
const btnSubmit = document.getElementById('btnSubmit');
const showCountry = document.getElementById('showCountry')
const showLocation = document.getElementById('showLocation')

async function getData(lat, long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=c4b469446da64a62a7455412241903&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}

async function gotLocation(position){
    const result = await getData(
        position.coords.latitude,
        position.coords.longitude,
    );
    console.log(result);
    showCountry.innerText = result.location.country;
    showLocation.innerText = result.location.name

}

function failedToGet(){
    console.log('There was some issue while fetvching your location');
}

btnSubmit.addEventListener('click',async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet);
})