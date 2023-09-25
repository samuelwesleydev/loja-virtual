export const PopupLogin = {
    buttonCloser: document.querySelector('.btn-close-popup'),
    buttonLogin: document.querySelector('.btn-login'),
    popup:  document.querySelector('.popup-login'),
    open(){
        PopupLogin.popup.classList.toggle('visible')
        PopupLogin.popup.style.display = "block"
    },
    close(){
        PopupLogin.popup.classList.toggle('visible')
    },
}