const input = document.getElementById('input-action')

function inputValue(event) {
    console.log(event.target.value)
}

input.addEventListener('change', inputValue) 

const form = document.querySelector('#form-action')

form.addEventListener('submit', function(event){
    console.log(event)
    event.preventDefault()
})