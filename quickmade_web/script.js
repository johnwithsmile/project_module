// console.log("hello world");

// alert("오늘 기분은 어때요?");

// let button = document.querySelector("input");
// button.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// function hi() {
//   alert("hi");
// }

document.addEventListener("DOMContentLoaded", function (e) {
  document.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "q") {
      alert("This is Q!");
    }
  });
  let keydown = document.querySelector("#keydown");
  keydown.addEventListener("keydown", function (e) {
    console.log(e.target.value);
  });
  let change = document.querySelector("#change");
  change.addEventListener("change", function (e) {
    console.log(e.target.value);
  });
  let input = document.querySelector("#input");
  change.addEventListener("input", function (e) {
    console.log(e.target.value);
  });
});
