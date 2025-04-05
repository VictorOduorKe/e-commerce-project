const displayCart = document.getElementById("cart");

let cart = [];

function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem("Cart_items");

    if (cartString) {
        cart = JSON.parse(cartString);
        generateCartHTML(cart);
    }
}

// Generate HTML for the cart items
function generateCartHTML(cartItems) {
    if (cartItems.length === 0) {
        return displayCart.innerHTML = "Your cart is empty";
    }

    const cartHTML = cartItems.map(item => {
        return `
            <div class="cart-item">
                <img src="../${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                 <div class="cart-btns">
                    <button onclick="incrementQuantity(${item.id})">+</button>
                    <span id="quantity-${item.id}">${item.quantity || 1}</span> <!-- Default quantity is 1 -->
                    <button onclick="decrementQuantity(${item.id})">-</button>
                 </div>
                <button onclick="removeItemFromCart(${item.id})">Remove</button>
            </div>
        `;
    }).join(""); // Join all items into one string

    displayCart.innerHTML = cartHTML;
}

// Increment quantity of an item
function incrementQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = (item.quantity || 1) + 1; // Increment quantity
        updateCart();
    }
}

// Decrement quantity of an item
function decrementQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrement quantity
        updateCart();
    }
}

// Remove item from the cart
function removeItemFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId); // Remove item by id
    updateCart();
}

// Update cart in localStorage and re-render
function updateCart() {
    localStorage.setItem("Cart_items", JSON.stringify(cart)); // Save updated cart to localStorage
    generateCartHTML(cart); // Re-render the cart
}


// Retrieve cart from localStorage on page load
retrieveFromLocalStorage();
