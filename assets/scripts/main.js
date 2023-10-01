import { PopupLogin } from "./popup-login.js"
import { Menu } from "./menu.js"
import { ChangeColor } from "./colors-product.js"

const productsCards = document.querySelectorAll('.product')


// action menu

Menu.buttonMenu.onclick = ()=>{
    Menu.open()
    productsCards.forEach((produto)=>{
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

// action colors selected

ChangeColor.colorNatural.forEach((color, index)=>{
    color.onclick = ()=>{
        ChangeColor.naturalColor(color,index)
    }
})
ChangeColor.colorBlue.forEach((color, index)=>{
    color.onclick = ()=>{
        ChangeColor.blueColor(color,index)
    }
})
ChangeColor.colorBlack.forEach((color, index)=>{
    color.onclick = ()=>{
        ChangeColor.blackColor(color,index)
    }
})


// action login

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







