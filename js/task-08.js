const form = document.querySelector('.login-form')
const inputs = form.querySelectorAll('input')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    for (const input of inputs) {
        if (input.value === '') {
            return alert('Все поля должны быть заполнены!')
        }
    }

    const formElements = event.currentTarget.elements
    const mail = formElements.email.value
    const password = formElements.password.value

    const formData = {
        mail,
        password,
    }
    console.log(formData);
    form.reset()
}