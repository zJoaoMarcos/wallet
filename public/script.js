const submitButton = document.querySelector('#button-submit')

function clickButton(event) { 
    console.log(event)
}

submitButton.addEventListener('click', clickButton)
