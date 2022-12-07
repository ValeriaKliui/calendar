let userInfo = document.querySelector('.user-information');

function showWindowSize() {
    let windowWidth = document.querySelector('.width');
    windowWidth.textContent += window.outerWidth;
    userInfo.append(windowWidth);
    window.onresize = () => {
        windowWidth.textContent = window.outerWidth;
    }
}

function showLanguage() {
    let language = document.querySelector('.language');
    language.textContent += window.navigator.language;
    userInfo.append(language);
}

if (sessionStorage.getItem('name')) {
    userInfo.style.display = 'block';
    showWindowSize();
    showLanguage();    
}