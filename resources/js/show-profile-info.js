let userInfo = document.querySelector('.user-information');
showWindowSize();
showLanguage();

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

