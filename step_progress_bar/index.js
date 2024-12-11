const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepEl = document.querySelectorAll(".step");

const progressEl = document.querySelector(".progress-bar-front");

let currentChecked = 1;

nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepEl.length) {
    currentChecked = stepEl.length;
  }
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepEl.forEach((step, idx) => {
    if (idx < currentChecked) {
      step.classList.add("checked");
      step.innerHTML = `
        <i class="fa-solid fa-check"></i>
        <small>${
          idx === 0
            ? "Start"
            : idx === stepEl.length - 1
            ? "Final"
            : "Step " + idx
        }</small>
      `;
    } else {
      step.classList.remove("checked");
      step.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
      `;
    }
  });
  const checkedNumber = document.querySelectorAll(".checked");
  progressEl.style.width =
    ((checkedNumber.length - 1) / (stepEl.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepEl.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}
