const boxContainer = document.querySelector(".box__container")

for (var i = 0; i < 12; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    
    let randomRed = Math.floor(Math.random() * 255)
    let randomGreen = Math.floor(Math.random() * 255)
    let randomBlue = Math.floor(Math.random() * 255)

    box.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    box.textContent = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`

    boxContainer.appendChild(box)
}
