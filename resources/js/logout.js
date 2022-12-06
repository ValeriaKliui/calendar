let buttonLogOut = document.querySelector('.button-logout');
buttonLogOut.onclick = ()=>{
    if (sessionStorage.getItem('name')){
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('password');
    }
    location.reload();
}
