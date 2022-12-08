function showActiveLink(){
    let links = document.querySelectorAll('.navigation a');
    for (let link of links){
        if (link.href === location.href){
            link.classList.add('active');
        }
    }
}
showActiveLink();