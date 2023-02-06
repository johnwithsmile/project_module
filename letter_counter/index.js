let limit = 100;
let textarea = document.getElementById("textarea");
textarea.setAttribute("maxlength", limit);
textarea.setAttribute("placeholder", "Please write your text here, limit is " + limit + " letters")
const textAreaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total_counter")
const remainingCounterEL = document.getElementById("remaining_counter")
textAreaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textAreaEl.value.length
    remainingCounterEL.innerText = textAreaEl.getAttribute("maxLength") 
    - textAreaEl.value.length
}