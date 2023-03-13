const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
event.preventDefault();
const elements = event.target.elements;
const formData = {};

for (const element of elements){
    if (element.nodeName == 'INPUT'){
        if (!element.value){
            alert("Всі поля мають бути заповнені");
            return;
        }
    formData[element.name] = element.value;
    }}
    console.log(formData);
    loginForm.reset();
})





