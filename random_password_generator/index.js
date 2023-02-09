const btnEL = document.querySelector(".btn")
const inputEL = document.getElementById("input")
const copyIconEl = document.querySelector(".fa-copy")
const alertContainerEl = document.querySelector("alert_container")

btnEL.addEventListener("click", ()=>{
    createPassword();
})

copyIconEl.addEventListener("click", ()=>{
    copyPassword();
    if(inputEL.value){
        alertContainerEl.classList.remove("active")
        setTimeout(()=> {
        alertContainerEl.classList.add("active")
        }, 2000)
    }
})

function createPassword(){
 const chars = "01234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()?_+:{}[]ABCDEFGHIJKLMNOPQURSTUVWXYZ"
 const passwordLength = 14
 let password = ""
 for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor
    (Math.random() * chars.length)
    password += chars.substring(randomNum, randomNum + 1)
 }
 inputEL.value = password;
 alertContainerEl.innerText = password + " copied!"
}

function copyPassword(){
    inputEL.select();
    inputEL.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEL.value)
}