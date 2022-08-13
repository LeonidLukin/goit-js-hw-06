const inputRef = document.getElementById('validation-input')

inputRef.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (inputRef.value.length >= inputRef.dataset.length) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
    } else if (inputRef.value.length < inputRef.dataset.length) {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    }
}