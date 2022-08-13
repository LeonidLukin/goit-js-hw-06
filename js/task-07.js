const rangeRef = document.getElementById('font-size-control')
const spanRef = document.getElementById('text')
spanRef.style.fontSize = '36px'

rangeRef.addEventListener('input', onInputRange)

function onInputRange() {
    return spanRef.style.fontSize = `${rangeRef.value}px`
}