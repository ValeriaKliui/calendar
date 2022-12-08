let username = sessionStorage.getItem('name');
let buttonLogIn = document.querySelector('.button-login');
let buttonLogOutt = document.querySelector('.button-logout');
let iconOfUser = document.querySelector('.authorized-user');

function removeButtonLogIn() {
        buttonLogIn.hidden = true;
}
function removeButtonLogOut() {
    buttonLogOutt.hidden = true;
}
function showUsername() {
    let usernameBlock = document.querySelector('.username');
    usernameBlock.textContent = username;
}

if (sessionStorage.getItem('name')) {
    showUsername();
    removeButtonLogIn();
}
if (!sessionStorage.getItem('name') ) {
   if (iconOfUser) iconOfUser.hidden=true;
    if (buttonLogOutt) removeButtonLogOut();
}

if (window.location.href.includes('login.html')){
    iconOfUser.hidden=true;
}