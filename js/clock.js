const clock = document.querySelector("#clock");

function time() {
    const setTime = new Date();
    const getHours = String(setTime.getHours()).padStart(2,"0");
    const getMinutes = String(setTime.getMinutes()).padStart(2,"0");
    const getSeconds = String(setTime.getSeconds()).padStart(2,"0"); //padStart()가 string타입을 인식하기 때문에, String으로 변환.
    clock.innerText = `${getHours}:${getMinutes}:${getSeconds}`;
}

time();
setInterval(time, 1000);