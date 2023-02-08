const monthNameEL = document.getElementById("month_name")
const dayNameEL = document.getElementById("day_name")
const dayNumberEL = document.getElementById("day_number")
const yearEL = document.getElementById("year")

const date = new Date();
const month = date.getMonth();
monthNameEL.innerText = date.toLocaleString("en", {
    month :"long"
})

dayNameEL.innerText = date.toLocaleString("en", {
    weekday: "long"
})

dayNumberEL.innerText = date.getDate();

yearEL.innerText = date.getFullYear();