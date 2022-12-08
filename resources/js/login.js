import {user} from './user-data.js';

let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let button = document.querySelector('.submit-button');
let wrongMessage = document.querySelector('.wrong-message');
wrongMessage.hidden = true;

button.onclick =()=> {
 if (usernameInput.value === user.username && +passwordInput.value === user.password){
    window.location.href = 'profile.html';
    sessionStorage.setItem('name', user.username);
    sessionStorage.setItem('password', user.password);
}
else {
    wrongMessage.hidden = false;
};
}