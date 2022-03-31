const input = document.querySelector('#input-action')
const form = document.querySelector('#form-action')

function inputValue(event) {
    console.log(event.target.value)
}

input.addEventListener('change', inputValue) 


function submitButton(event) {
    console.log(event)
    event.preventDefault()
}

form.addEventListener('submit', submitButton)