const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener("input", () =>{
    if (inputName.value){
outputName.textContent = inputName.value;
    }
    else{
        outputName.textContent = "Anonymous";
        }    
})
