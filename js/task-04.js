const counterRef = document.getElementById('counter')
const btnsRef = counterRef.querySelectorAll('button') //NodeList кнопок

btnsRef.forEach(btn => {
    btn.addEventListener('click', function () {
        const action = this.dataset.action
        let spanValue = this.parentElement.querySelector('#value')
        let counterValue = +spanValue.textContent

        let newValue
        if (action === 'increment') {
            newValue = counterValue + 1
        } else {
            newValue = counterValue - 1 > 0 ? counterValue - 1 : 0
        }
        spanValue.textContent = newValue
    })
})