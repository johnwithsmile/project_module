const containerEl = document.querySelector(".container")


for (let index = 0; index < 30; index++) {
    const colorContinerEl = document.createElement("div");
    colorContinerEl.classList.add("color_container");
    containerEl.appendChild(colorContinerEl);
}


const colorContinerEls = document.querySelectorAll(".color_container")

generateColors()
function generateColors(){
    colorContinerEls.forEach((colorContinerEl) => {
        const newColorCode = randomColor()
        colorContinerEl.style.backgroundColor = "#" + newColorCode
        colorContinerEl.innerText = "#" + newColorCode
    })
}


function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*
        chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1)
    }
    return colorCode;
}

