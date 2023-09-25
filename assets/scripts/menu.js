export const Menu = {
    buttonMenu: document.querySelector('.nav .button-menu'),
    menuLinks:document.querySelector('.nav-links'),
    open(){
        Menu.menuLinks.classList.toggle('visible')
    },
    close(){
        Menu.menuLinks.classList.remove('visible')

    }
}