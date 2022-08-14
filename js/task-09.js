const spanRef = document.querySelector('.color')
const changeColor = document.querySelector('.change-color')

changeColor.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {
  const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  document.body.style.background = newColor
  spanRef.textContent = newColor
}