const item = document.querySelector('img .shoes')

const toCart = document.querySelector('button .shoes')

toCart.addEventListener('click', () => {
    item.clone().append('.cart')
})