const containerEl = document.querySelector(".container")

const btnEl = document.querySelector(".btn")

const popupContainerEl = document.querySelector(".popup_container")

const closeIconEl = document.querySelector(".close_icon")

btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active")
    popupContainerEl.classList.remove("active")
})

closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active")
    popupContainerEl.classList.add("active")
})