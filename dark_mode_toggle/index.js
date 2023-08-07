const inputEl = document.querySelector(".input");

const bodyEL = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEL.style.background = "black";
  } else {
    bodyEL.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLodcalStorage();
});

function updateLodcalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
