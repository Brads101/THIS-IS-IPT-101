
let cart = [];


function addToCart(item) {
    cart.push(item);
    alert(`${item.name} has been added to your cart!`);
    console.log(cart);
}


function init() {
 
    const addToCartButtons = document.querySelectorAll('.add.to.cart');

    // Add click event listeners to each button
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const products = [
                { name: 'Predator Helios', price: 94999 },
                { name: 'Predator Aethon 500', price: 10000 },
                { name: 'Predator Aparat Z50', price: 10500 },
            ];
            addToCart(products[index]);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);

