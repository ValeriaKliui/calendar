let username = sessionStorage.getItem('name');
let buttonLogIn = document.querySelector('.button-login');
let iconOfUser = document.querySelector('.authorized-user');

function removeButtonLogIn() {
        buttonLogIn.hidden = true;
}
function showUsername() {
    let usernameBlock = document.querySelector('.username');
    usernameBlock.textContent = username;
}

if (sessionStorage.getItem('name')) {
    showUsername();
    removeButtonLogIn();
}
if (!sessionStorage.getItem('name')) {
    iconOfUser.hidden=true;
}