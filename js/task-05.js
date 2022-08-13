const inputRef = document.getElementById('name-input')
const spanRef = document.getElementById('name-output')

inputRef.addEventListener('input', onInputChange)


function onInputChange() {
    spanRef.textContent = event.currentTarget.value

    if (spanRef.textContent === '') {
        spanRef.textContent = 'Anonymous'
    }
}