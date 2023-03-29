const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom_container");
console.log(navbarEl.offsetHeight);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
