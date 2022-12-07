let username = sessionStorage.getItem('name');
let buttonLogIn = document.querySelector('.button-login');
function removeButtonLogIn() {
    if (username) {
        buttonLogIn.hidden = true;
    }
}
function showUsername() {
    let usernameBlock = document.querySelector('.username');
    usernameBlock.textContent = username;
}

if (sessionStorage.getItem('name')) {
    showUsername();
    removeButtonLogIn();
}
