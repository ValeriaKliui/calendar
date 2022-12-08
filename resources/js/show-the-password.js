let checkbox = document.querySelector('.visibility-of-password');
let passwordField = document.querySelector('.password-field');
let checkboxText = document.querySelector('.visibility-of-password__text');

checkbox.onclick = ()=>{
    if(checkbox.checked){
        passwordField.type = 'text';
    }
    else passwordField.type = 'password';
}