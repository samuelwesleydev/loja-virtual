import { PopupLogin } from "./popup-login.js"
import { Menu } from "./menu.js"

const productsCards = document.querySelectorAll('.product')


Menu.buttonMenu.onclick = ()=>{
    Menu.open()
    produto.forEach((produto)=>{
        produto.addEventListener('mouseover', ()=>{
        })
    })
}

productsCards.forEach(function(product){
    product.addEventListener('mouseover', ()=>{
    if(Menu.menuLinks.classList.contains('visible')){
        Menu.open()
        product.removeEventListener('mouseover', ()=>{})
        }
    })
})


document.addEventListener('click', (event)=>{
    if(event.target !== Menu.menuLinks && event.target !== Menu.buttonMenu){
        Menu.close()
    }
})



PopupLogin.buttonLogin.onclick = ()=>{
    PopupLogin.open()
}

PopupLogin.buttonCloser.onclick = ()=>{
    PopupLogin.close()
}

document.addEventListener('click', (event)=>{
    if(event.target !== PopupLogin.popup && event.target !== PopupLogin.buttonLogin){
        PopupLogin.popup.classList.remove('visible')
    }
})
