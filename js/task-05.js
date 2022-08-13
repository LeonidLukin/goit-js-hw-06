const inputRef = document.getElementById('name-input')
const spanRef = document.getElementById('name-output')
console.log(spanRef.textContent);

inputRef.addEventListener('input', onInputChange)


function onInputChange() {
    spanRef.textContent = event.currentTarget.value

    if (spanRef.textContent === '') {
        spanRef.textContent = 'Anonymous'
    }
}

function onInputBlur() {
    console.log('Интпут не в фокусе');
}