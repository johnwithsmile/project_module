const hourEL = document.querySelector(".hour")
const minuteEL = document.querySelector(".minute")
const secondEL = document.querySelector(".second")

function updateClock(){
    const currentDate = new Date()
    // setTimeout(updateClock, 1000);
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()
    const hourDeg = (hour / 12) * 360;
    hourEL.style.transform = `rotate(${hourDeg}deg)`
    const minDeg = (minute / 60) * 360;
    minuteEL.style.transform = `rotate(${minDeg}deg)`
    const secondDeg = (second / 60) * 360;
    secondEL.style.transform = `rotate(${secondDeg}deg)`
}

setInterval(updateClock, 1000)