export const ChangeColor = {
    imgProduct: document.querySelectorAll('.img-product img'),

    colorNatural: document.querySelectorAll('.color.natural '),
    colorBlue: document.querySelectorAll('.color.blue '),
    colorBlack: document.querySelectorAll('.color.black '),
    naturalColor(color,index){
        const pos = index
        seletedColor (color, index)

        this.imgProduct.forEach((img, index)=>{
            const indexImgEqualsIndex = index === pos
            if(indexImgEqualsIndex) img.src = "assets/img/produtos/iphone-15-natural.jpeg"})
    },

    blueColor(color,index){
        const pos = index
        seletedColor (color, index)

       this.imgProduct.forEach((img, index)=>{
            const indexImgEqualsIndex = index === pos
            if(indexImgEqualsIndex) img.src = "assets/img/produtos/iphone-15-darkblue.jpeg"})
    },

    blackColor(color,index){
        const pos = index
        seletedColor (color, index)

        this.imgProduct.forEach((img, index)=>{
            const indexImgEqualsIndex  = index === pos
            if(indexImgEqualsIndex) img.src = "assets/img/produtos/iphone15-black.jpeg"})
    }

}

function seletedColor (color, index){
    ChangeColor.colorBlack[index].classList.remove('selected')
    ChangeColor.colorBlue[index].classList.remove('selected')
    ChangeColor.colorNatural[index].classList.remove('selected')
    color.classList.add('selected')
}


