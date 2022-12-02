"use strict";
let productsInCart = [];
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-prices");
const products = document.querySelectorAll('.product-under');

const updateShoppingCartHTML = function() {
    if(productsInCart.length > 0){
    }
    else {
        document.querySelector('.checkout').classList.add('hidden');

    }
    }


function updateProductsInCart(product){
    for(let i=0; i < productsInCart.length; i++){
        if(productsInCart[i].id == productId){
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}

products.forEach(product => {
    product.addEventListener('click', (e) => {
        if(e.target.classList.contains ('addToCart')) {
            const productID = e.target.dataset.productId;
            const productName = product.querySelector('.productName').innerHTML;
            const productPrice = product.querySelector('.priceValue').innerHTML;
            const productImage = product.querySelector('img').src;
            let productToCart = {
                name: productName,
                Image: productImage,
                id: productID,
                count : 1,
                price: +productPrice,
                basePrice: +productPrice
            }
            updateProductsInCart(productToCart);
            updateShoppingCartHTML();

        }
    });
});
