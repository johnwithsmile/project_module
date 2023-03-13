const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListEl = document.querySelector(".social_lists");
const liEls = document.querySelectorAll(".social_lists li");

console.log(liEls);

menuEl.addEventListener("click", () => {
  socialListEl.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
});

liEls.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    menuTextEl.innerHTML = liEl.innerHTML;
    socialListEl.classList.add("hide");
    menuEl.classList.toggle("rotate");
  });
});
