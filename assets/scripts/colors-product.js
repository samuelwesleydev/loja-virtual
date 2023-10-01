export const ChangeColor = {
    imgProduct: document.querySelectorAll('.img-product picture img'),
    imgProductMobile: document.querySelectorAll('.img-product picture source'),

    colorNatural: document.querySelectorAll('.color.natural '),
    colorBlue: document.querySelectorAll('.color.blue '),
    colorBlack: document.querySelectorAll('.color.black '),
    naturalColor(color,index){
        const pos = index
        seletedColor (color, index)
        updateImg(color, index)
    },

    blueColor(color,index){
        const pos = index
        seletedColor (color, index)
        updateImg(color, index)
    },

    blackColor(color,index){
        const pos = index
        seletedColor (color, index)
        updateImg(color, index)
    }

}

function seletedColor (color, index){
    ChangeColor.colorBlack[index].classList.remove('selected')
    ChangeColor.colorBlue[index].classList.remove('selected')
    ChangeColor.colorNatural[index].classList.remove('selected')
    color.classList.add('selected')
}

function updateImg(color, index){
    const button = color
    const pos = index

    switch (button.classList[1]) {
        case 'natural':
            ChangeColor.imgProductMobile.forEach((img, index)=>{
            const indexImgEqualsIndex = index === pos
            if(indexImgEqualsIndex) img.srcset = "assets/img/produtos/iphone-15-natural-mobile.jpeg"})

            ChangeColor.imgProduct.forEach((img, index)=>{
            const indexImgEqualsIndex = index === pos
            if(indexImgEqualsIndex) img.src = "assets/img/produtos/iphone-15-natural.jpeg"})
          break;

        case 'black':
            ChangeColor.imgProductMobile.forEach((img, index)=>{
            const indexImgEqualsIndex = index === pos
            if(indexImgEqualsIndex) img.srcset = "assets/img/produtos/iphone-15-black-mobile.jpeg"})

            ChangeColor.imgProduct.forEach((img, index)=>{
            const indexImgEqualsIndex = index === pos
            if(indexImgEqualsIndex) img.src = "assets/img/produtos/iphone15-black.jpeg"})
            break

        case 'blue':
            ChangeColor.imgProductMobile.forEach((img, index)=>{
            const indexImgEqualsIndex = index === pos
            if(indexImgEqualsIndex) img.srcset = "assets/img/produtos/iphone-15-darkblue-mobile.jpeg"})

            ChangeColor.imgProduct.forEach((img, index)=>{
            const indexImgEqualsIndex = index === pos
            if(indexImgEqualsIndex) img.src = "assets/img/produtos/iphone-15-darkblue.jpeg"})
          break;

        default:
          
      }
}


