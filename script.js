const addToCartButton = document.querySelectorAll('.cartButton')
const numberItems = document.querySelector('.numberItems')
const close = document.querySelector('.close')
const openCartButton = document.getElementById('openCartButton')
const cartContainer = document.querySelector('.cartWindowContainer')
const images = document.querySelectorAll('.image')
const titles = document.querySelectorAll('.title')
const prices = document.querySelectorAll('.price')
const itemInfo = document.querySelector('.itemInfo')


addToCartButton.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.parentElement
        const image = parent.querySelector('.image')
        const title = parent.querySelector('.title')
        const price = parent.querySelector('.price')

        numberItems.textContent = parseInt(numberItems.textContent) + 1
        const productArticle = document.createElement('article')
        productArticle.style.display = 'flex'
        productArticle.style.justifyContent = 'space-between'
        productArticle.style.alignItems = 'center'
        productArticle.style.borderColor = "brown"
        productArticle.style.border = '1px solid'
        productArticle.style.borderRadius = '20px'
        productArticle.style.padding = '8px'
        itemInfo.appendChild(productArticle)

        const productImg = document.createElement('img')
        productImg.src = image.src
        productImg.style.width = '50px'
        productImg.style.marginRight = '10px'
        productArticle.appendChild(productImg)

        const productTitle = document.createElement('h4')
        productTitle.textContent = title.textContent
        productTitle.style.fontSize = '20px'
        productTitle.style.fontWeight = 'bold'
        productArticle.appendChild(productTitle)

        const productPrice = document.createElement('p')
        productPrice.textContent = price.textContent
        productPrice.style.marginLeft = '10px'
        productPrice.style.fontWeight = 'bold'
        productPrice.style.fontSize = '18px'
        productArticle.appendChild(productPrice)

        const productQuantity = document.createElement('div')
        productQuantity.style.display = 'flex'
        productQuantity.style.justifyContent = 'space-between'
        productQuantity.style.alignItems = 'center'
        productArticle.appendChild(productQuantity)

        const quantity = document.createElement('input')
        quantity.type = 'number'
        quantity.value = 1
        quantity.style.border = '1px solid'
        quantity.style.borderRadius = '5px'
        quantity.style.width = '30px'
        quantity.style.marginLeft = '10px'
        productQuantity.appendChild(quantity)

        const units = document.createElement('p')
        units.textContent = 'uds'
        productQuantity.appendChild(units)
        // const productRemove = document.createElement('button')
        // productRemove.textContent = 'Remove'
        // productRemove.style.backgroundColor = 'red'
        // productRemove.style.color = 'white'
        // productRemove.style.border = 'none'
        // itemInfo.appendChild(productRemove)
    })
})

openCartButton.addEventListener('click', () => {
    cartContainer.style.display = 'block'
})

close.addEventListener('click', () => {
    cartContainer.style.display = 'none'
})