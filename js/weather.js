const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:nth-child(2)");
const temp = document.querySelector("#weather span:last-child");
const API_KEY = "ac0a31ea3545e785252876f64298b137"

function onGeok(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
            temp.innerText = `${data.main.temp}도`;
        })
    console.log("You live in", lat, lng);
}

function onGeoError() {
    alert("I can't find the weather")
}

navigator.geolocation.getCurrentPosition(onGeok, onGeoError);
