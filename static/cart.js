
function addToCart(item) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = []; 
    } else {
        cart = JSON.parse(cart); 
    }
    cart.push(item); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
}


function displayCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    let cart = localStorage.getItem('cart');
    if (!cart) {
        return; 
    }
    cart = JSON.parse(cart); 
    cartItemsContainer.innerHTML = ''; 
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name} Image">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Price: €${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: €${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
}


function displayCartSummary() {
    const cartSummaryContainer = document.querySelector(".cart-summary");
    let cart = localStorage.getItem('cart');
    if (!cart) {
        return;
    }
    cart = JSON.parse(cart); 
    const totalItems = cart.length;
    const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    cartSummaryContainer.innerHTML = `
        <h2>Cart Summary</h2>
        <p>Total Items: ${totalItems}</p>
        <p>Total Price: €${totalPrice.toFixed(2)}</p>
        <button class="checkout-btn">Proceed to Checkout</button>
    `;
}


function updateCartPage() {
    displayCartItems();
    displayCartSummary();
}

document.addEventListener("DOMContentLoaded", function() {
    updateCartPage();
});
