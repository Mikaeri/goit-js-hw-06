const validationInput = document.querySelector('#validation-input');

console.log(validationInput);
validationInput.addEventListener("blur", ()=>{
    if (validationInput.value.length == validationInput.dataset.length){
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
    else{
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
})