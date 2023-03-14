const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
    console.log(updateLocalStorage());
  } else {
    score--;
    updateLocalStorage();
    console.log(updateLocalStorage());
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
