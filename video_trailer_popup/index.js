const btnEl = document.querySelector(".btn")
const closeIconEl = document.querySelector(".close_icon")
const trailerContainerEl = document.querySelector(".trailer_container")
const videoEl = document.querySelector("video")


btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active") 
})

closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active")
    videoEl.pause()
    videoEl.currentTime = 0;
})

