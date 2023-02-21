const searchBarContainerEl = document.querySelector(".search_bar_container")

const magifierEl = document.querySelector(".magnifier")

magifierEl.addEventListener("click", ()=>{
    searchBarContainerEl.classList.toggle("active")
})